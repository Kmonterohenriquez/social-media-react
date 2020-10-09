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

//
const getUserPosts = (req, res, next) => {
  const { userID } = req.params;
  Post.find({ $or: [{ userID }] }).then((post) => {
    res.status(200).json({
      status: "succes",
      message: "Posts ready!",
      data: post,
    });
  });
};

// CREATE Post
async function createPost(req, res, next) {
  const {
    title,
    image,
    skills,
    salary,
    category,
    description,
    userID,
  } = req.body;
  let post = new Post({
    title,
    image,
    skills,
    salary,
    category,
    description,
    userID,
  });
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
      console.log("An error ocurred Creating a Post.");
    });
}

// DELETE Post
const deletePost = (req, res, next) => {
  const id = req.params.post_id;
  Post.findByIdAndDelete(id)
    .then((res) => res.json({ message: "Post deleted." }))
    .catch((err) => res.json({ message: "Error occured when deleting post." }));
};

// UPDATE Post
const updatePost = (req, res, next) => {
  // GET post's information existed to UPDATE it
  const { title, image, skills, salary, category, description } = req.body;

  // Look for Post by its ID and UPDATE with new info that User inserted.
  Post.findById(req.params.post_id).then((post) => {
    post.title = title;
    post.image = image;
    post.skills = skills;
    post.salary = salary;
    post.category = category;
    post.description = description;
  });
};

module.exports = {
  getPosts,
  getOnePost,
  getUserPosts,
  createPost,
  deletePost,
  updatePost,
};
