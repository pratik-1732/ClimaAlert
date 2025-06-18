import React from "react";
import DayCard from "./DayCard";

const SevenDay = () => {
  return (
    <div className="flex flex-col m-20">
      <h2 className="text-2xl font-bold text-white mb-5">7-Day Forecast</h2>
      <div className="bg-blue-400 rounded-2xl p-4">
        <DayCard />
        <DayCard />
        <DayCard />
        <DayCard />
        <DayCard />
        <DayCard />
        <DayCard />
      </div>
    </div>
  );
};

export default SevenDay;
