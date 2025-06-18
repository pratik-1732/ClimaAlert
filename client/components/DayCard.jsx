import React from "react";

const DayCard = () => {
  return (
    <div className="mb-2 px-4 bg-transparent py-2 border-b-1 border-blue-300 flex justify-between text-sm font-bold text-white">
      <div className="flex gap-4">
        <h3>Today</h3>
        <span class="dot  bg-pink-600 h-8 w-8 rounded-[50%] ml-10"></span>
        <h3>Sunny</h3>
      </div>
      <div className="flex gap-5">
        <h4>10%</h4>
        <h3>23°/32°</h3>
      </div>
    </div>
  );
};

export default DayCard;
