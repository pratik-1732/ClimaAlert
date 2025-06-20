import React, { useEffect, useState } from "react";
import DayCard from "./DayCard";

const SevenDay = ({ data }) => {
  if (!data) return console.log("data not recieved in SevenDay.jsx");

  const [forecastArr, setForecastArr] = useState([]);

  useEffect(() => {
    const {
      forecast: { forecastday },
    } = data;

    setForecastArr(forecastday);
  }, [data]);

  return (
    <div className="flex flex-col m-20">
      <h2 className="text-2xl font-bold text-white mb-5">7-Day Forecast</h2>
      <div className="bg-blue-400 rounded-2xl p-4">
        {forecastArr.map((ele, index) => {
          return (
            <DayCard
              key={index}
              data={ele}
              isLast={index === forecastArr.length - 1}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SevenDay;
