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
    <div className="flex flex-col sm:px-10 lg:px-20 my-10  w-full">
      <h2 className="text-2xl font-bold text-white mb-5">Hourly Forecast</h2>
      <div className="p-7  bg-blue-400 rounded-2xl flex gap-5 flex-wrap">
        {upcomingHours.map((ele, index) => {
          return (
            <HourCard data={ele} key={index} bgColor={colorArray[index]} />
          );
        })}
      </div>
    </div>
  );
};

export default Hourly;
