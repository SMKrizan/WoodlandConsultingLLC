const {
  AuthenticationError,
  UserInputError,
} = require("apollo-server-express");
const { Admin, Category, Project, UserForm, Testimonial } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
    projects: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category
      }

      if (name) {
        params.name = {
          $regex: name,
        };
      }

      return await Project.find(params).populate("category");
    },
    projectById: async (parent, { _id }) => {
      return await (await Portfolio.findById(_id)).populate("category");
    },
    testimonials: async () => {
      return await Testimonial.find();
    },
    messages: async () => {
      return await UserForm.find();
    }
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
    addTestimonial: async (parent, args) => {
      const testimonial = await Testimonial.create({
        ...args
      });
      return testimonial;
    },

  },
};

module.exports = resolvers;
