const LikePost = require("../models/postLike.model");

const updateLike = (req, res, next) => {
  // GET current user's ID and post's id from the Front-End
  const { userID, postID, like } = req.body;
  LikePost.findOneAndUpdate({ userID, postID }, { like }).then((like) => {
    res.status(200).send(like);
  });
};

const getAllUsersLikes = (req, res, next) => {
  const { postID } = req.body;
  LikePost.find({ postID }).then(Like => );
};

const getOneUserLike = (req, res, next) => {
  // GET current user's ID and post's id from the Front-End
  const { userID, postID } = req.body;
  LikePost.findOne({ userID, postID }).then((like) => {
    res.status(200).send(like);
    console.log(like);
  });
};

module.exports = { getOneUserLike, getAllUsersLikes, updateLike };
