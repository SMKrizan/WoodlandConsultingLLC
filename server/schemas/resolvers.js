const {
  AuthenticationError,
  UserInputError,
} = require("apollo-server-express");
const Admin = require("../models/Admin");
const { Admin, Category, Project } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    WoodlandConsulting: () => {
      return "Happy Lunar New Year!";
    },
    categories: async () => {
      return await Category.find();
    }
  }
};

module.exports = resolvers;
