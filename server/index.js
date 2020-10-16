require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { SERVER_PORT, ATLAS_URI } = process.env;
const app = express();

// IMPORT ROUTES
const AuthRoute = require("./routes/AuthRoute");
const PostRoute = require("./routes/PostRoute");
const UserRoute = require("./routes/UserRoute");
const CommentRoute = require("./routes/CommentRoute")

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(`${__dirname}/../build`));

// MongoDB conection
const uri = ATLAS_URI;
mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully!");
});

const port = SERVER_PORT;

//SETUP ROUTES
app.use("/api", AuthRoute);
app.use("/posts", PostRoute);
app.use("/user", UserRoute);
app.use("/comments" , CommentRoute)

app.listen(port, () => console.log(`Server running on port ${port}`));
