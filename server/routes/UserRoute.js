const express = require("express");
const router = express.Router();

const UserController = require("../controllers/userController");

router.get("/:email", UserController.currUserInfo);

module.exports = router;
