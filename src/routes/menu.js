import express from "express";
import serverHelper from "../utils/server-helper.js";
import { menuModel } from "../models/menuModel.js";

const routeAll = express.Router();

routeAll.get("/", (req, res) => {
  const limit = parseInt(req.query?.limit ?? 0);
  serverHelper(async () => {
    const data = await menuModel
      .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
      .limit(limit);
    res.status(200).send({ success: true, data });
  }, res);
});

export default routeAll;
