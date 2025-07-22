import React, { useState } from "react";
import Info from "./Info";

const Current = ({ data }) => {
  const weatherData = data;

  if (!weatherData) return console.log("data not recieved in current.jsx");

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
  } = weatherData;

  return (
    <div className="relative overflow-hidden">
      <div className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 mx-2 sm:mx-4 md:mx-8 lg:mx-20 my-4 sm:my-6 md:my-8 rounded-3xl sm:rounded-[2rem] backdrop-blur-2xl bg-gradient-to-br from-blue-400/90 via-blue-500/80 to-indigo-600/90 shadow-2xl border border-white/30 min-h-[450px] sm:min-h-[500px] lg:min-h-[350px] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-10 -right-10 w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute -bottom-16 -left-16 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-purple-400/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/3 left-1/3 w-24 sm:w-32 h-24 sm:h-32 bg-cyan-300/10 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-white/30 rounded-full animate-bounce"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute top-1/2 right-10 w-1 h-1 bg-white/50 rounded-full animate-bounce"
            style={{ animationDelay: "1.5s" }}
          ></div>
        </div>

        {/* Content  */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="flex flex-col items-center justify-center text-white text-center gap-4 sm:gap-6 lg:flex-shrink-0 lg:w-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-full blur-2xl scale-150 group-hover:scale-175 transition-transform duration-700"></div>
              <img
                className="relative z-10 h-24 w-24 sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-40 lg:w-40 drop-shadow-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 filter brightness-110 contrast-110"
                src={icon}
                alt="Weather condition"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
            </div>

            {/* Temperature */}
            <div className="relative">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white drop-shadow-2xl tracking-tight bg-gradient-to-br from-white via-white to-blue-100 bg-clip-text">
                {temp_c}°
              </h1>
              <div className="absolute -inset-2 bg-gradient-to-r from-white/10 via-white/5 to-transparent rounded-2xl blur-xl"></div>
            </div>

            {/* Weather */}
            <div className="relative">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white/95 break-words max-w-xs leading-relaxed px-4 py-2 rounded-2xl backdrop-blur-sm bg-white/10 border border-white/20">
                {text}
              </h3>
            </div>
          </div>

          {/* Location and Weather  */}
          <div className="flex flex-col items-center lg:items-start flex-1 w-full max-w-2xl">
            <div className="mb-8 sm:mb-10 md:mb-12 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
              <div className="relative mb-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 drop-shadow-xl tracking-tight leading-tight">
                  {name}
                </h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white/80 tracking-wide">
                  {country}
                </h2>
                <div className="absolute -inset-4 bg-gradient-to-r from-white/10 via-transparent to-white/10 rounded-3xl blur-2xl"></div>
              </div>

              <div className="relative">
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white/95 bg-gradient-to-r from-white/20 to-white/10 px-6 py-3 rounded-2xl backdrop-blur-md border border-white/30 shadow-lg">
                  📅 {localtime}
                </h4>
              </div>
            </div>

            {/* Weather Info */}
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-4xl">
              <Info
                data={{
                  name: "Humidity",
                  val: `${humidity}%`,
                  bgColor: "#FF6B35",
                }}
              />
              <Info
                data={{
                  name: "Pressure",
                  val: `${pressure_in} in`,
                  bgColor: "#F7931E",
                }}
              />
              <Info
                data={{
                  name: "Wind Speed",
                  val: `${wind_kph} kph`,
                  bgColor: "#2ECC71",
                }}
              />
              <Info data={{ name: "UV Index", val: uv, bgColor: "#9B59B6" }} />
              <Info
                data={{ name: "Sunrise", val: sunrise, bgColor: "#E74C3C" }}
              />
              <Info
                data={{ name: "Sunset", val: sunset, bgColor: "#C0392B" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Current;
