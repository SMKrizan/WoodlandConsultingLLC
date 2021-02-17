
const {
  AuthenticationError,
  UserInputError,
} = require("apollo-server-express");
const {
  Admin,
  Category,
  Project,
  UserForm,
  Testimonial,
} = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
    admin: async () => {
      return await Admin.find();
    },
    projects: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name,
        };
      }

      return await Project.find(params).populate("category");
    },
    projectsByCategory: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name,
        };
      }
      return await Project.find(params).populate("category");
    },
    projectById: async (parent, { _id }) => {
      return await (await Project.findById(_id)).populate("category");
    },
    testimonials: async () => {
      return await Testimonial.find();
    },
    messages: async () => {
      return await UserForm.find();
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const admin = await Admin.findOne({ email });

      if (!admin) {
        throw new AuthenticationError("Incorrect credentials!");
      }

      const correctPw = await admin.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials!");
      }

      const token = signToken(user);

      return { token, admin };
    },
    updateAdmin: async (parent, args, context) => {
      if (context.admin) {
        const Admin = await Admin.findByIdAndUpdate(context.admin._id, args, {
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
      if (context.admin) {
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
      if (context.admin) {
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
      if (context.admin) {
        const updatedMessageList = await UserForm.findByIdAndUpdate(
          { $pull: _id },
          { new: true }
        )
        return updatedMessageList
      }
    },
  },
};

module.exports = resolvers;
