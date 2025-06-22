import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import subscribeRoute from "./routes/subscribe.js";
import weatherRoute from "./routes/weather.js";
import cityWeatherRoute from "./routes/cityWeather.js";

const app = express();

connectDB();
dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// routes
app.use("/api", subscribeRoute);
app.use("/api/weather", weatherRoute);
app.use("/api/cityWeather", cityWeatherRoute);

app.get("/", (req, res) => {
  res.send("Hello friends");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
