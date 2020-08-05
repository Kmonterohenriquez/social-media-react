require("dotenv").config();
const express = require("express");
const authCtrl = require("./controllers/AuthController");
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
const app = express();

app.use(express.json());
app.use(express.static(`${__dirname}/../build`));

const port = SERVER_PORT;

app.listen(port, () => console.log(`Server running on port ${port}`));
