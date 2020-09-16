const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
    },
    image: {
      type: String,
      trim: true,
    },
    skills: {
      type: String,
      // required: true,
      trim: true,
    },
    salary: {
      type: String,
      // required: true,

      trim: true,
    },
    category: {
      type: String,
      // required: true,
      trim: true,
    },
    description: {
      type: String,
      // required: true,
      minlength: 30,
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
