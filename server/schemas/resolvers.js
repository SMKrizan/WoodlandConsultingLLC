const {
  AuthenticationError,
  UserInputError,
} = require("apollo-server-express");
const Admin = require("../models/Admin");
const { Admin, Category, Project, Portfolio } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    WoodlandConsulting: () => {
      return "Happy Lunar New Year!";
    },
    categories: async () => {
      return await Category.find();
    },
    portfolio: async (parent, { category, name }) => {
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
    portfolio: async (parent, { _id }) => {
      return await (await Portfolio.findById(_id)).populate("category");
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

      return { token, user };
    },
  },
};

module.exports = resolvers;
