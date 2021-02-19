const mongoose = require("mongoose");

const { Schema } = mongoose;

const locationSchema = new Schema(
  {
    latitude: {
      type: Number,
    },
    longitude: {
      type: Number,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

module.exports = locationSchema;
