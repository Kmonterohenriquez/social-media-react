const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postLikeSchema = new Schema({
  postID: {
    type: String,
    required: true,
    trim: true,
  },
  userID: {
    type: String,
    require: true,
    trim: true,
  },
  liked: {
    type: Boolean,
    require: true,
  },
});

const PostLike = mongoose.model("PostLike", postLikeSchema);

module.exports = PostLike;
