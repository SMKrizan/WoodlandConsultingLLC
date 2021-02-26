const mongoose = require("mongoose");

const { Schema } = mongoose;

const categorySchema = new Schema(
  {
    categoryName: {
      type: String,
      required: true,
      trim: true,
    },
  },
);

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;

// delete .git
// open terminal in this project in the root and 'git init'
// 'git remote add origin https://github.com/SMKrizan/WoodlandConsultingLLC.git'
// 'git branch -m main'
// follow heroku
