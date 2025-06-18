import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const getWeatherByCoords = async (req, res) => {
  const { lat, lon } = req.query;
  const apiKey = process.env.WEATHER_API_KEY;

  if (!lat || !lon) {
    return res
      .status(400)
      .json({ message: "latitude and longitude are required" });
  }
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather`,
      {
        params: {
          lat: lat,
          lon: lon,
          units: "metric",
          appid: apiKey,
          exclude: "minutely,alerts",
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error("Weather API Error:", error.message);
    res.status(500).json({ message: "Failed to fetch weather data" });
  }
};

export default getWeatherByCoords;
