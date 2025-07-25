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
    <div className="group relative bg-slate-900/60 backdrop-blur-xl rounded-3xl p-6 text-white font-medium flex flex-col items-center w-[6%] min-w-[110px] border border-amber-400/30 hover:border-amber-400/60 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/20 transform hover:-translate-y-1">
      {/* Time */}
      <h3 className="mb-4 font-bold text-lg relative z-10 text-amber-300 drop-shadow-lg">
        {hr} {ampm}
      </h3>

      {/* Color */}
      <div className="relative mb-4 z-10">
        <div className="relative">
          <span
            className="block h-14 w-14 rounded-full shadow-lg ring-2 ring-white/20 group-hover:ring-amber-400/50 transition-all duration-500"
            style={{
              backgroundColor: bgColor,
              boxShadow: `0 0 15px ${bgColor}30`,
            }}
          ></span>
        </div>
      </div>

      {/* Temperature */}
      <h3 className="mb-3 text-2xl font-bold  bg-clip-text text-white/80 relative z-10 drop-shadow-lg">
        {temp_c}°C
      </h3>

      {/* Rain chance */}
      <div className="flex items-center gap-2 text-sm relative z-10">
        <span className="ml-1 text-cyan-300 font-semibold">
          {chance_of_rain}%
        </span>
      </div>
    </div>
  );
};

export default HourCard;
