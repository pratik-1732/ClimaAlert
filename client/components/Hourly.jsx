import React, { useEffect, useState } from "react";
import HourCard from "./HourCard";

const Hourly = ({ data }) => {
  if (!data) return console.log("data not recieved in Hourly.jsx");

  const [hourArr, setHourArr] = useState([]);

  useEffect(() => {
    const { hour } = data.forecast.forecastday[0];

    setHourArr(hour);
  }, [data]);

  const generateRandomHexColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const colorArray = Array.from({ length: 24 }, generateRandomHexColor);

  const currentEpoch = Math.floor(Date.now() / 1000);
  const upcomingHours = hourArr.filter(
    (hour) => hour.time_epoch > currentEpoch
  );

  return (
    <div className="flex flex-col sm:px-10 lg:px-20 my-10 w-full">
      {/* title  */}
      <div className="relative mb-12">
        <h2 className="text-5xl font-black text-white bg-clip-text mb-4 drop-shadow-2xl tracking-tight">
          Hourly Forecast
        </h2>
      </div>

      <div className="relative">
        <div className="relative p-10 bg-white/5 backdrop-blur-xl rounded-3xl border-2 border-white/10 shadow-2xl">
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            {/* stars */}
            <div className="absolute top-8 left-16 w-1 h-1 bg-amber-300 rounded-full animate-ping opacity-80"></div>
            <div
              className="absolute top-12 right-20 w-0.5 h-0.5 bg-cyan-300 rounded-full animate-ping opacity-70"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-24 left-48 w-1 h-1 bg-pink-300 rounded-full animate-ping opacity-60"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute bottom-12 right-32 w-0.5 h-0.5 bg-purple-300 rounded-full animate-ping opacity-80"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute bottom-24 left-24 w-1 h-1 bg-emerald-300 rounded-full animate-ping opacity-70"
              style={{ animationDelay: "1.5s" }}
            ></div>
          </div>

          {/* Cards  */}
          <div className="relative z-10 flex gap-8 flex-wrap justify-center lg:justify-start">
            {upcomingHours.map((ele, index) => {
              return (
                <HourCard data={ele} key={index} bgColor={colorArray[index]} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hourly;
