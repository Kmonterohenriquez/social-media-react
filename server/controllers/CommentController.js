const CommentPost = require("../models/commentPost.model");

const getComments = (req, res, next) => {
  CommentPost.find().then((comments) => {
    if (comments) {
      res.status(200).json({
        status: "succes",
        message: "Comments ready!",
        data: comments,
      });
      return;
    } else {
      res.status(401).json({
        status: "error",
        message: "Comments Not found.",
      });
    }
  });
};

const addComment = (req, res, next) => {
  // GET data from the front-end
  const { postID, userID, comment } = req.body;
  
  // CREATE New Comment
  let newComment = new CommentPost({ postID, userID, comment });
  // SAVE new comment in DB
  newComment
    .save()
    .then((comment) => {
      res.json({
        data: comment,
        message: "New Post Created Successfully",
      });
      console.log("New Post Created Successfully");
    })
    .catch((err) => {
      res.json({
        message: "An error ocurred Creating a Post.",
      });
      console.log("An error ocurred Creating a Post.");
    });
};

const deleteComment = () => {};

const updateComment = () => {};

module.exports = { getComments, addComment, deleteComment, updateComment };
