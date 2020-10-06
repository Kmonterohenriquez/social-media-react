const express = require("express");
const router = express.Router();

const CommentController = require("../controllers/CommentController");

// GET All Comments
router.get("/", CommentController.getComments);

// ADD one Comment
router.post("/", CommentController.addComment);

// UPDATE a comment
router.put("/:comment_id", CommentController.updateComment);

// DELETE a comment
router.delete("/:comment_id", CommentController.deleteComment);

module.exports = router