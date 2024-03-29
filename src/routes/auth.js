import express from "express";

const route = express.Router();

route.post("/register", (req, res) => {
  res.status(201).send({
    success: true,
    message: "Create",
  });
});

export default route;
