import React, { useState } from "react";
import Info from "./Info";

const Current = ({ data }) => {
  if (!data) return console.log("data not recieved in current.jsx");

  const {
    location: { name, country, localtime },
    current: {
      temp_c,
      condition: { text, icon },
      wind_kph,
      humidity,
      pressure_in,
      uv,
    },
    forecast: {
      forecastday: [
        {
          astro: { sunrise, sunset },
        },
      ],
    },
  } = data;

  return (
    <div className=" py-10 mx-20 my-15 rounded-2xl flex justify-between items-center bg-blue-400 ">
      <div className="ml-50 flex flex-col items-center justify-center md:items-start text-white text-center overflow-hidden gap-3 ">
        <img
          className="dot  h-30 w-30 rounded-[50%] mb-5 bg-transparent"
          src={icon}
        />
        <h1 className="text-4xl font-bold">{temp_c}°C</h1>
        <h3 className="text-xl break-words">{text}</h3>
      </div>
      <div className="ml-4  0 flex flex-col items-start p-6">
        <div className="mb-10 flex flex-col items-center">
          <h1 className="text-white font-bold text-4xl mb-3">
            {name}, {country}
          </h1>
          <h4 className="text-white font-semibold text-lg mb-3">{localtime}</h4>
        </div>
        <div className="flex flex-wrap gap-3 ">
          <Info
            data={{ name: "Humidity", val: humidity, bgColor: "#FFD32D" }}
          />
          <Info
            data={{ name: "Pressure", val: pressure_in, bgColor: "#D84040" }}
          />
          <Info
            data={{
              name: "Wind Speed (kph)",
              val: wind_kph,
              bgColor: "#6EBF8B",
            }}
          />
          <Info data={{ name: "UV Index", val: uv, bgColor: "#442B72" }} />
          <Info data={{ name: "Sunrise", val: sunrise, bgColor: "#421B9B" }} />
          <Info data={{ name: "Sunset", val: sunset, bgColor: "#FF0000" }} />
        </div>
      </div>
    </div>
  );
};

export default Current;
