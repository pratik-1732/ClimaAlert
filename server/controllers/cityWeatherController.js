import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const getWeatherByPlace = async (req, res) => {
  const place = req.query.place;
  const apiKey = process.env.WEATHER_API_KEY;

  if (!place) {
    return res.status(400).json({ error: "Place is required." });
  }

  try {
    const response = await axios.get(
      `http://api.weatherapi.com/v1/forecast.json`,
      {
        params: {
          key: apiKey,
          q: place,
          days: 7,
          aqi: "no",
          alerts: "no",
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    // console.error("Weather API Error:", error.message);
    if (error.response && error.response.status === 400) {
      return res.status(400).json({ error: "Invalid city name" });
    }

    res.status(500).json({ error: "Failed to fetch weather data" });
  }
};

export default getWeatherByPlace;
