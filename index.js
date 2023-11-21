const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 5001;

const menuRoutes = require("./src/routes/menu");

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
  })
);
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send({
    message: "Bistro boss restaurant server in running",
  });
});

app.use("/menus", menuRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
