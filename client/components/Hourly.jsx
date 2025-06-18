import React from "react";
import HourCard from "./HourCard";

const Hourly = () => {
  return (
    <div className="flex flex-col mx-20 my-10">
      <h2 className="text-2xl font-bold text-white mb-5">Hourly Forecast</h2>
      <div className="py-7  bg-blue-400 rounded-2xl flex gap-5 px-7">
        <HourCard />
        <HourCard />
        <HourCard />
      </div>
    </div>
  );
};

export default Hourly;
