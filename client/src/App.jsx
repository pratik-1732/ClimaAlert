import React, { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Current from "../components/Current";
import Hourly from "../components/Hourly";
import SevenDay from "../components/SevenDay";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import Popup from "../components/Popup";
import OtpPopUp from "../components/otpPopup";

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        getWeatherByCoord(latitude, longitude);
      },
      (err) => {
        setError("Location access denied.");
        setShowPopup(true);
        console.error(err);
      }
    );
  }, []);

  const getWeatherByCoord = async (latitude, longitude) => {
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
      setError("");
    } catch (err) {
      setError("Failed to fetch weather.");
      setShowPopup(true);

      console.error(err);
    }
  };

  const getWeatherByPlace = async (place) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/cityWeather`,
        {
          params: {
            place,
          },
        }
      );
      setWeather(res.data);
      setError("");
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setError("Please enter a valid city name.");
        setShowPopup(true);
      } else {
        setError("Something went wrong. Try again later.");
        setShowPopup(true);
      }
    }
  };

  return (
    <>
      <Navbar onSearch={getWeatherByPlace} />
      <Current data={weather} />
      <Hourly data={weather} />
      <SevenDay data={weather} />
      <Subscribe />
      <Footer />

      {showPopup && (
        <Popup message={error} onClose={() => setShowPopup(false)} />
      )}
    </>
  );
}

export default App;
