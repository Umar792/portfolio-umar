const express = require("express");
const router = express.Router();
const controller = require("../Controller/UserController");

router.post("/signup", controller.CreateUser);

router.post("/login", controller.login);

module.exports = router;
