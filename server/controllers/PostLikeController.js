const PostLike = require("../models/postLike.model");

const updateLike = (req, res, next) => {
  // GET current user's ID and post's id from the Front-End
  const { userID, postID, liked } = req.params;
  console.log("HIT!!!!")
  console.log("User ID: ", userID)
  console.log("Post ID: ", postID,' ', "liked: ", liked)

  PostLike.findOne({ $or: [{userID}, {postID}] }).then(postLiked => {
    if(postLiked){

    }
  })
  console.log(likeFound)

  // let postLiked = new PostLike({
  //   userID, 
  //   postID,
  //   liked
  // })
  
  // postLiked.save()
  //   .then( postLiked => {
  //     res.json({
  //       message: "Post liked by a user successfully!"
  //     });
  //     console.log("Post liked by a user successfully!")
  //   })
  //   .catch( err => {
  //     res.json({
  //       message: "An error ocurred liking a post."
  //     });
  //     console.log("An error ocurred liking a post.")
  //   })
  // .then(liked => {
  //   if(liked){
  //     console.log('hola')
  //   } else {
  //     let postLiked = new PostLike({
  //       userID, 
  //       postID,
  //       liked
  //     })
  //   }
  // })
  // postLike.findOneAndUpdate({ userID, postID }, { liked }).then((liked) => {
  //   res.status(200).send(liked);
  // });
};

const getAllUsersLikes = (req, res, next) => {
  // const { postID } = req.body;
  // LikePost.find({ postID }).then(Like => );
};

const getOneUserLike = (req, res, next) => {
  // GET current user's ID and post's id from the Front-End
  const { userID, postID, liked } = req.params;
  LikePost.findOne({ userID, postID }).then((liked) => {
    res.status(200).send(like);
    console.log(like);
  });
};

module.exports = { getOneUserLike, getAllUsersLikes, updateLike };
