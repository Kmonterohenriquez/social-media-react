const User = require("../models/user.model");

const currUserInfo = (req, res, next) => {
  const { email } = req.params;
  User.find({ $or: [{ email: email }] })
    .then((user) => {
      if (user) {
        res.status(200).json({
          status: "succes",
          message: "User Found!",
          data: user,
        });
        return;
      } else {
        res.status(401).json({
          status: "error",
          message: "User not found.",
          data: user,
        });
        return;
      }
    })
    .catch((err) => console.log(err));
};

const getUserInfo = (req, res, next) => {
  const { userID } = req.params;
  User.find({ $or: [{ _id: userID }] })
    .then((user) => {
      if (user) {
        res.status(200).json({
          status: "succes",
          message: "User Found!",
          data: user,
        });
        return;
      } else {
        res.status(401).json({
          status: "error",
          message: "User not found.",
          data: user,
        });
        return;
      }
    })
    .catch((err) => console.log(err));
};

module.exports = { currUserInfo, getUserInfo };
