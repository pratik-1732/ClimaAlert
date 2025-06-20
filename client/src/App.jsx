import React, { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Current from "../components/Current";
import Hourly from "../components/Hourly";
import SevenDay from "../components/SevenDay";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const res = await axios.get(
            `${import.meta.env.VITE_API_BASE_URL}/api/weather`,
            {
              params: {
                lat: latitude,
                lon: longitude,
              },
            }
          );
          setWeather(res.data);
        } catch (err) {
          setError("Failed to fetch weather.");
          console.error(err);
        }
      },
      (err) => {
        setError("Location access denied.");
        console.error(err);
      }
    );
  }, []);

  return (
    <>
      <Navbar />
      <Current data={weather} />
      <Hourly data={weather} />
      <SevenDay data={weather} />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
