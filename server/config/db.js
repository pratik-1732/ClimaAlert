import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log("db is connected successfully...");
  } catch (err) {
    console.error(err.message);
  }
};

export default connectDB;
