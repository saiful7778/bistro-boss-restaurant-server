import express from "express";
import { reviewModel } from "../models/reviewModel.js";
import serverHelper from "../utils/server-helper.js";

const routeAll = express.Router();

routeAll.get("/", (req, res) => {
  serverHelper(async () => {
    const data = await reviewModel.find(
      {},
      { __v: 0, createdAt: 0, updatedAt: 0, _id: 0 },
    );
    res.status(200).send({
      success: true,
      data,
    });
  }, res);
});

export default routeAll;
