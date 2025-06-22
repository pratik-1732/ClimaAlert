import express from "express";
import getWeatherByPlace from "../controllers/cityWeatherController.js";

const router = express.Router();

router.get("/", getWeatherByPlace);

export default router;
