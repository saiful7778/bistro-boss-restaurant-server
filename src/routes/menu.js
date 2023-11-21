const express = require("express");
const route = express.Router();

route.get("/", async (req, res) => {
  try {
  } catch (err) {
    res.status(500).send({ message: "An error" });
  }
});

module.exports = route;
