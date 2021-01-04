const express = require("express");
const router = express.Router();

const UserController = require("../controllers/userController");

router.get("/:email", UserController.currUserInfo);
router.get("/info/:userID", UserController.getUserInfo);
module.exports = router;
