const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentPostSchema = new Schema(
  {
    postID: {
      type: String,
      require: true,
      trim: true,
    },
    userID: {
      type: String,
      require: true,
    },
    comment: {
      type: String,
      require: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const CommentPost = mongoose.model("CommentPost", commentPostSchema);

module.exports = CommentPost;
