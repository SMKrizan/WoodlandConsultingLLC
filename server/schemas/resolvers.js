
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
      return await Owner.find();
    },
    projects: async () => {
      return await Project.find();
    },
    // projects: async (parent, { category, projectName }) => {
    //   const params = {};

    //   if (category) {
    //     params.category = category;
    //   }

    //   if (projectName) {
    //     params.projectName = {
    //       $regex: projectName,
    //     };
    //   }

    //   return await Project.find(params).populate("category");
    // },
    // args?
    projectsByCategory: async (parent, { category, projectName }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (projectName) {
        params.projectName = {
          $regex: projectName,
        };
      }

      return await Project.find(params).populate("category");
    },
    projectById: async (parent, { _id }) => {
      return await Project.findById(_id).populate("category");
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
    // -------------PROJECT-------------
    project: async (parent, { category, project_name }) => {
      const params = {};

      if (category) {
        params.category = category
      }

      if (project_name) {
        params.project_name = {
          $regex: project_name,
        };
      }

      return await Project.find(params).populate("category");
    },
    project: async (parent, { _id }) => {
      return await (await Project.findById(_id)).populate("category");
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

      const token = signToken(user);

      return { token, owner };
    },
    updateOwner: async (parent, args, context) => {
      if (context.owner) {
        const Owner = await Owner.findByIdAndUpdate(context.owner._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    addTestimonial: async (parent, args) => {
      const testimonial = await Testimonial.create({
        ...args,
      });
      return { testimonial };
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
      throw new AuthenticationError("Not logged in");
    },
    removeTestimonial: async (parent, { _id }, context ) => {
      if (context.owner) {
      const deleteTest = await Testimonial.findByIdAndUpdate(
        _id,
        { $pull: _id },
        { new: true }
      );
      return deleteTest;
      }
      throw new AuthenticationError("You need be logged in to delete a testimonial. ")
    },
    addMessage: async ( parent, args ) => {
        const message = await UserForm.create({
          ...args
        });
        return { message };
    },
    removeMessage: async ( parent, { _id }, context ) => {
      if (context.owner) {
        const updatedMessageList = await UserForm.findByIdAndUpdate(
          { $pull: _id },
          { new: true }
        )
        return updatedMessageList
      }
    },

    addProject: async (parent, args) => {
      const project = await Project.create(args);
      // const token = signToken(project);

      return { project };
    }
  },
};

module.exports = resolvers;
