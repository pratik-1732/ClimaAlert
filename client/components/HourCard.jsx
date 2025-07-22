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
    <div className="group relative bg-gradient-to-br from-slate-800/90 via-slate-700/80 to-slate-900/90 backdrop-blur-xl rounded-3xl p-6 text-white font-medium flex flex-col items-center w-[6%] min-w-[110px] border border-amber-400/20 transition-all duration-700 hover:scale-110 hover:shadow-2xl transform hover:-translate-y-2">
      {/* Time  */}
      <h3 className="mb-4 font-bold text-lg relative z-10 text-amber-300 drop-shadow-lg">
        {hr} {ampm}
      </h3>

      {/*  color  */}
      <div className="relative mb-4 z-10">
        <div className="relative">
          <span
            className="block h-14 w-14 rounded-full shadow-2xl ring-white/30 transition-all duration-500 transform"
            style={{
              backgroundColor: bgColor,
            }}
          ></span>
        </div>
      </div>

      {/* Temperature  */}
      <h3 className="mb-3 text-2xl font-bold bg-gradient-to-r from-amber-300 via-orange-400 to-pink-400 bg-clip-text text-transparent relative z-10 drop-shadow-lg">
        {temp_c}°C
      </h3>

      {/* Rain chance  */}
      <div className="flex items-center gap-2 text-sm relative z-10">
        <span className="ml-1 text-cyan-300 font-semibold">
          {chance_of_rain}%
        </span>
      </div>
    </div>
  );
};

export default HourCard;
