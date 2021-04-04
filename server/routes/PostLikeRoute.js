const express = require("express");
const router = express.Router();

const LikePostController = require("../controllers/PostLikeController");

router.put(`/update/:userID/:postID/:liked`, LikePostController.updateLike);

module.exports = router;
