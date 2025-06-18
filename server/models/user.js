import mongoose from "mongoose";

const userScema = mongoose.Schema({
  Name: String,
  Number: String,
  Coordinates: String,
  Date: {
    type: String,
    default: Date.now,
  },
});

module.exports = mongoose.model("user", userScema);
