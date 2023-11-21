const express = require("express");
const { menuColl } = require("../db/mongodb");
const route = express.Router();

route.get("/", async (req, res) => {
  try {
    const count = await menuColl.estimatedDocumentCount();
    const result = await menuColl.find().toArray();
    if (!result) {
      return res.status(204).send({ message: "no data found" });
    }
    res.status(200).send({
      totalCount: count,
      count: result.length,
      result,
    });
  } catch (err) {
    res.status(500).send({ message: "a server error occurred" });
  }
});
module.exports = route;
