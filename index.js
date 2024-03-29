import express from "express";
import cors from "cors";
import { config } from "dotenv";
import mongoose from "mongoose";
import authentication from "./src/routes/auth.js";

config();
// eslint-disable-next-line no-undef
const port = process.env.PORT || "5001";
// eslint-disable-next-line no-undef
const dbUrl = process.env.DB_CONNECT;

(async () => {
  try {
    console.log("connecting...");
    await mongoose.connect(dbUrl);
    console.log("connected DB");
  } catch (err) {
    console.log("connection failed");
    console.log(err);
  }
})();

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "DELETE", "OPTIONS", "PATCH"],
    optionsSuccessStatus: 200,
  }),
);
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({
    success: true,
    message: "Server is running",
  });
});

app.use("/authentication", authentication);

app.listen(port, () => {
  console.log("server is runing on port", port);
});
