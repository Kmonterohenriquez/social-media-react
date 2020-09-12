const Post = require("../models/post.model");

// GET Posts
const getPosts = (req, res, next) => {
  Post.find().then((posts) => {
    if (posts) {
      res.status(200).json({
        status: "succes",
        message: "Posts ready!",
        data: posts,
      });
      return;
    } else {
      res.status(401).json({
        status: "error",
        message: "Posts Not found.",
      });
    }
  });
};

// GET a Post
const getOnePost = (req, res, next) => {
  Post.findOne().then((post) => {
    res.status(200).json({
      status: "succes",
      message: "Posts ready!",
      data: post,
    });
  });
};

// CREATE Post
const createPost = (req, res, next) => {
  const { title, skills, salary, type, description } = req.body;
  let post = new Post({ title, skills, salary, type, description });
  console.log(post)
  // SAVE new post in DB
  post
    .save()
    .then((post) => {
      res.json({
        data: post,
        message: "New Post Created Successfully",
      });
      console.log("New Post Created Successfully");
    })
    .catch((err) => {
      res.json({
        message: "An error ocurred Creating a Post.",
      });
    });
};

// DELETE Post
const deletePost = (req, res, next) => {
  const {} = req.body;
};

// UPDATE Post
const updatePost = (req, res, next) => {
  const {} = req.body;

  let post = new Post({});
};

module.exports = { getPosts, getOnePost, createPost, deletePost, updatePost };
