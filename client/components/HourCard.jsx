import React from "react";

const HourCard = ({ data, bgColor }) => {
  const {
    chance_of_rain,
    condition: { icon, text },
    temp_c,
    time,
  } = data;
  const date = new Date(time);
  let hr = date.getHours();
  const ampm = hr >= 12 ? "PM" : "AM";
  hr = hr % 12 || 12;
  return (
    <div className="bg-blue-300 rounded-2xl p-5 text-white font-medium flex flex-col items-center w-[6%] min-w-[90px]">
      <h3 className="mb-2 font-bold">
        {hr} {ampm}
      </h3>
      <span
        typeof="square"
        className="h-10 w-10 mb-3 rounded-full"
        style={{ backgroundColor: bgColor }}
      ></span>
      <h3 className="mb-1">{temp_c}°C</h3>
      <h4 className="text-sm">{chance_of_rain} %</h4>
    </div>
  );
};

export default HourCard;
