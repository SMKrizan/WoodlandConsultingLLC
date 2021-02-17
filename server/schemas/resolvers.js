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
    // ------------PORTFOLIO-------------------
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

    addProject: async (parent, args) => {
      const project = await Project.create(args);
      // const token = signToken(project);

      return { project };
    }
  },
};

module.exports = resolvers;
