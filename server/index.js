require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { SERVER_PORT, ATLAS_URI } = process.env;
const app = express();

// IMPORT ROUTES
const AuthRoute = require('./routes/AuthRoute');
const PostRoute = require('./routes/PostRoute');
const UserRoute = require('./routes/UserRoute');
const CommentRoute = require('./routes/CommentRoute');
const AWSRoute = require('./routes/AWSRoute');
const PostLikeRoute = require('./routes/PostLikeRoute');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(`${__dirname}/../build`));

// MongoDB connection
const uri = ATLAS_URI;
mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully!');
});

//SETUP ROUTES
app.use('/api', AuthRoute);
app.use('/aws', AWSRoute);
app.use('/posts', PostRoute);
app.use('/user', UserRoute);
app.use('/comments', CommentRoute);
app.use('/like', PostLikeRoute);

const port = SERVER_PORT;
app.listen(port, () => console.log(`Server running on port ${port}`));
