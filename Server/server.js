const express = require("express");
const app = express();

// ------------------- dotenv
require("dotenv").config();

// -------------- cors
var cors = require("cors");
app.use(cors());

// ---------------- body parser
var bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// --------------- connect db
require("./DB/DB");

// --------------- router
app.use("/", require("./Router/userRouter"));

// ---------------------- creating server
const server = app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});

// ============================== Error Handling
process.on("uncaughtException", (err) => {
  console.log(`Unhandled error due to uncaughtException: ${err.message}`);
  console.log("Server shutting down");
  server.close(() => {
    process.exit(1);
  });
});

process.on("unhandledRejection", (err) => {
  console.log(`Unhandled error due to unhandledRejection: ${err.message}`);
  console.log("Server shutting down");
  server.close(() => {
    process.exit(1);
  });
});
