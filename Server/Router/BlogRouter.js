const express = require("express");
const router = express.Router();
const controller = require("../Controller/BlogController");
const TokenVerify = require("../middleware/TokenVerify");

router.post("/createBlog", TokenVerify, controller.createBlog);

module.exports = router;
