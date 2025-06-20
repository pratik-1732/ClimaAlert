import React from "react";

const DayCard = ({ data, isLast }) => {
  const {
    date,
    day: {
      condition: { icon, text },
      maxtemp_c,
      mintemp_c,
      daily_chance_of_rain,
    },
  } = data;

  return (
    <div
      className={`mb-2 px-4 bg-transparent py-2 ${
        !isLast ? "border-b-1 border-blue-300" : ""
      } flex justify-between text-sm font-bold text-white`}
    >
      <div className="flex gap-4">
        <h3>{date}</h3>
        <img
          className="dot h-10 w-10 border-1 border-blue-300 p-1 rounded-[50%] ml-10"
          src={icon}
        ></img>
        <h3>{text}</h3>
      </div>
      <div className="flex gap-5">
        <h4>{daily_chance_of_rain}%</h4>
        <h3>
          {mintemp_c}°c/{maxtemp_c}°c
        </h3>
      </div>
    </div>
  );
};

export default DayCard;
