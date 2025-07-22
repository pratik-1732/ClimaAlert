import React from "react";

const Info = ({ data }) => {
  const { name, val, bgColor } = data;
  return (
    <div className="group relative overflow-hidden">
      <div
        className="px-3 sm:px-4 py-3 sm:py-4 rounded-2xl text-white font-medium shadow-xl transform group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-500 text-center min-h-[70px] sm:min-h-[80px] flex flex-col justify-center backdrop-blur-sm border border-white/20 relative z-10"
        style={{
          background: `linear-gradient(135deg, ${bgColor}dd, ${bgColor}bb)`,
        }}
      >
        <div className="text-xs sm:text-sm opacity-90 mb-1 font-medium tracking-wide uppercase">
          {name}
        </div>
        <div className="text-lg sm:text-xl md:text-2xl font-bold leading-tight">
          {val}
        </div>

        <div
          className="absolute inset-0 rounded-2xl opacity-20 blur-sm group-hover:opacity-40 transition-opacity duration-500"
          style={{ backgroundColor: bgColor }}
        ></div>
      </div>
    </div>
  );
};

export default Info;
