import mongoose from "mongoose";

const userScema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Number: {
    type: String,
    required: true,
  },
  Pincode: {
    type: String,
    required: true,
  },
  Date: {
    type: String,
    default: Date.now,
  },
});

const user = mongoose.model("user", userScema);

export default user;
