import express from "express";
import cors from "cors";
import { config } from "dotenv";

config();

import authentication from "./src/routes/auth.js";

const port = process.env.PORT || "5001";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"],
    optionsSuccessStatus: 200,
  })
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
