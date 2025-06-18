import express from "express";
import getWeatherByCoords from "../controllers/weatherController.js";

const router = express.Router();

router.get("/", getWeatherByCoords);

export default router;
