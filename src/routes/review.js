import express from "express";
import { reviewModel } from "../models/reviewModel.js";

const routeAll = express.Router();

routeAll.get("/", async (req, res) => {
  const data = await reviewModel.find(
    {},
    { __v: 0, createdAt: 0, updatedAt: 0, _id: 0 },
  );
  res.status(200).send({
    success: true,
    data,
  });
});

export default routeAll;
