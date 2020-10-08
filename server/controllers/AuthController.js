const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = (req, res, next) => {
  const { firstName, lastName, username, email, password } = req.body;

  // Encript Password
  bcrypt.hash(password, 10, (err, hashedPass) => {
    if (err) {
      res.json({
        error: err,
      });
    }
    // Get info from Front-End and Create object for new User registered
    let user = new User({
      firstName,
      lastName,
      username,
      email,
      password: hashedPass,
    });

    // Save new user in DB
    user
      .save()
      .then((user) => {
        res.json({
          message: "User Added Successfully",
        });
        console.log("User Added Successfully");
      })
      .catch((err) => {
        res.json({
          message: "An error ocurred Adding an User.",
        });
      });
  });
};

const login = (req, res, next) => {
  // Get info from the Front-End when users press Login button
  let email = req.body.email;
  let password = req.body.password;
  console.log("email", email, " password ", password);
  // Check if user exists on DadaBase
  User.findOne({ $or: [{ email: email }] }).then((user) => {
    if (user) {
      // Compare password gotten from Login form with the encripted pwd in the DB
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          res.json({
            error: err,
          });
        }
        if (result) {
          let token = jwt.sign({ name: user.name }, "verySecretValue", {
            expiresIn: "1h",
          });
          res.status(200).json({
            status: "succes",
            message: "Login successful!",
            data: req.body,
            token,
          });
          return;
        } else {
          res.status(401).json({
            status: "error",
            message: "Incorrect password.",
            data: req.body,
          });
          return;
        }
      });
    } else {
      res.status(400).json({
        status: "error",
        message: "User not found.",
        data: req.body,
      });
      return;
    }
  });
};

module.exports = {
  register,
  login,
};
