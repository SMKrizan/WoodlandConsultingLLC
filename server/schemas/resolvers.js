
const bcrypt = require('bcrypt');
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
    projects: async () => {      
      return await Project.find().populate('category');    
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

      const project  = Project.find({ category });
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
      return await Project.find().populate('category');
    },

  },
  Mutation: {
    login: async (parent, { ownerEmail, password }) => {
      const owner = await Owner.findOne({ ownerEmail });
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
        return testimonial;
      }
      throw new AuthenticationError("You must be logged in to perform this action.");
    },
    updateTestimonial: async (parent, args, context) => {
      console.log("args", args)
      if (context.owner) {
        const updatedTestimonial = await Testimonial.findByIdAndUpdate(
          args._id, args,
          {
            new: true,
          }
          
        );
        console.log("======================", updatedTestimonial)
        return updatedTestimonial;
        
      }
      
      throw new AuthenticationError("You must be logged in to perform this action.");
    },
    removeTestimonial: async (parent, { _id }, context ) => {
      if (context.owner) {
      const updatedTestimonials = await Testimonial.findByIdAndDelete(
        _id,
      );
      return updatedTestimonials;
      }
      throw new AuthenticationError("You must be logged in to perform this action.")
    },
    addMessage: async (parent, args ) => {
        const message = await Message.create({
          ...args
        });
        return message ;
    },
    removeMessage: async ( parent, { _id }, context ) => {
      if (context.owner) {
        const updatedMessageList = await Message.findByIdAndDelete(
        _id,);

        console.log("======", updatedMessageList);
        return updatedMessageList
      }
      throw new AuthenticationError("You must be logged in to perform this action.");
    },
  },
};

module.exports = resolvers;