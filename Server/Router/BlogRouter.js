const express = require("express");
const router = express.Router();
const controller = require("../Controller/BlogController");
const TokenVerify = require("../middleware/TokenVerify");

router.post("/createBlog", TokenVerify, controller.createBlog);
router.get("/getAllBlogs", controller.getAllBlogs);

module.exports = router;
