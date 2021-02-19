
const {
  AuthenticationError,
  UserInputError,
} = require("apollo-server-express");
const {
  Owner,
  Category,
  Project,
  Message,
  Testimonial,
} = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
    owner: async () => {

      const owner = await Owner.findOne();
      console.log('Owner: ', owner)
      return owner
    },
    projects: async () => {
      return await Project.find().populate('category');
    },
    projectsByCategory: async (parent, { category }) => {
      const params = {};
      if (category) {
        params.categoryName = category;
      }

      // if (projectName) {
      //   params.projectName = {
      //     $regex: projectName,
      //   };
      // }
      
      const project = Project.find({ category });
      console.log('category: ', category)
      return project
    },
    projectById: async (parent, { _id }) => {
      return Project.findOne({ _id });
    },
    testimonials: async () => {
      return await Testimonial.find();
    },
    messages: async () => {
      return await Message.find();
    },
    clientList: async () => {
      return await Project.find();
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const owner = await Owner.findOne({ email });

      if (!owner) {
        throw new AuthenticationError("Incorrect credentials!");
      }

      const correctPw = await owner.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials!");
      }

      const token = signToken(owner);

      return { token, owner };
    },
    updateOwner: async (parent, args, context) => {
      if (context.owner) {
        console.log('owner:', context.owner._id, args)
        const owner = await Owner.findByIdAndUpdate({_id: context.owner._id}, args, {
          new: true,
        });
        console.log('owner: ', owner)
      }

      throw new AuthenticationError("Not logged in");
    },
    addTestimonial: async (parent, args, context) => {
      if (context.owner) {
        const testimonial = await Testimonial.create({
          ...args,
        });
        return { testimonial };
      }
      throw new AuthenticationError("You must be logged in to perform this action.");
    },
    updateTestimonial: async (parent, args, context) => {
      if (context.owner) {
        return await Testimonial.findByIdAndUpdate(
          context.testimonial._id,
          args,
          {
            new: true,
          }
        );
      }
      throw new AuthenticationError("You must be logged in to perform this action.");
    },
    removeTestimonial: async (parent, { _id }, context ) => {
      if (context.owner) {
      const updatedTestimonials = await Testimonial.findByIdAndUpdate(
        _id,
        { $pull: _id },
        { new: true }
      );
      return updatedTestimonials;
      }
      throw new AuthenticationError("You must be logged in to perform this action.")
    },
    addMessage: async ( parent, args ) => {
        const message = await Message.create({
          ...args
        });
        return { message };
    },
    removeMessage: async ( parent, { _id }, context ) => {
      if (context.owner) {
        const updatedMessageList = await Message.findByIdAndUpdate(
          _id,
          { $pull: _id },
          { new: true }
        )
        return updatedMessageList
      }
      throw new AuthenticationError("You must be logged in to perform this action.");
    },
  },
};

module.exports = resolvers;
