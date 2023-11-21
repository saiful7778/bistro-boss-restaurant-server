const express = require("express");
const route = express.Router();

route.get("/", async (req, res) => {
  try {
  } catch (err) {
    res.status(500).send({ message: "a server error occurred" });
  }
});
module.exports = route;
