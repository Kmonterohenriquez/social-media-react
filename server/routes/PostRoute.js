const express = require("express");
const router = express.Router();

const PostController = require("../controllers/PostController");

router.get("/", PostController.getPosts); // GET ALL POSTS
router.get("/:post_id", PostController.getOnePost); // GET ONE POST
router.get("/profile/:userID", PostController.getUserPosts); // GET USER'S POSTS
router.post("/", PostController.createPost); // CREATE POST
router.put("/:post_id", PostController.updatePost); // UPDATE POST
router.delete("/:post_id", PostController.deletePost); // DELETE POST

module.exports = router;
