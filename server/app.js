import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

const app = express();

connectDB();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
