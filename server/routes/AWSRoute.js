const express = require("express")
const router = express.Router();

const AWSCtrl = require('../controllers/AWSController');

router.get('/upload', AWSCtrl.uploadImage);


module.exports = router