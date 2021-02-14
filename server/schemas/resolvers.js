const {
  AuthenticationError,
  UserInputError,
} = require("apollo-server-express");
const Admin = require("../models/admin");
const { Admin, Category, Project } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    WoodlandConsulting: () => {
      return "Happy Lunar New Year!";
    },
    categories: async () => {
      return await Category.find();
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
    project: async (parent, { _id }) => {
      return await (await Project.findById(_id)).populated("category");
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
