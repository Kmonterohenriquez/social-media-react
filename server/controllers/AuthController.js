const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = (req, res, next) => {
  // Encript Password
  bcrypt.hash(req.body.password, 10, (err, hashedPass) => {
    if (err) {
      res.json({
        error: err,
      });
    }

    // Get info from Front-End and Create object for new User registered
    let user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    // Save new user in DB
    user
      .save()
      .then((user) =>
        res.json({
          message: "User Added Successfully",
        })
      )
      .catch((err) => {
        res.json({
          message: "An error ocurred",
        });
      });
  });
};

const login = (req, res, next) => {
  // Get info from the Front-End when users press Login button
  let email = req.body.email;
  let password = req.body.password;

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
          res.json({ message: "Login successful!", token });
        } else {
          res.json({
            message: "Password does not matched!",
          });
        }
      });
    } else {
      res.json({
        message: "No user found!",
      });
    }
  });
};

module.exports = {
  register,
  login,
};
