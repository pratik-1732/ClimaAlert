import React from "react";

const HourCard = () => {
  return (
    <div className="bg-blue-300 rounded-2xl p-5 text-white font-medium flex flex-col items-center ">
      <h3 className="mb-2 font-bold">2 PM</h3>
      <img className=" bg-amber-600 outline-none h-10 w-10 rounded-full border-none mb-3" />
      <h3 className="mb-1">32°C</h3>
      <h4 className="text-sm">40 %</h4>
    </div>
  );
};

export default HourCard;
