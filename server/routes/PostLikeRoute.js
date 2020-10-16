const express = require("express");
const router = express.Router();

const LikePostController = require("../controllers/PostLikeController");

router.put("/", LikePostController.updateLike);

module.exports = router;
