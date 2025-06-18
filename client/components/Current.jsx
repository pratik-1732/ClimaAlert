import React from "react";
import Info from "./Info";

const Current = () => {
  return (
    <div className=" py-10 mx-20 my-15 rounded-2xl flex justify-between items-center bg-blue-400 ">
      <div className="ml-50 flex flex-col items-center justify-center md:items-start text-white gap-2">
        <span class="dot  h-20 w-20 rounded-[50%] mb-5 bg-amber-300"></span>
        <h1 className="text-4xl font-bold">32°C</h1>
        <h3 className="text-xl">Sunny</h3>
      </div>
      <div className="flex flex-col items-start p-6">
        <div className="mb-10 flex flex-col items-center">
          <h1 className="text-white font-bold text-4xl mb-3">
            Kolhapur, India
          </h1>
          <h4 className="text-white font-semibold text-lg mb-3">
            day, date, time
          </h4>
        </div>
        <div className="flex flex-wrap gap-4 w-1/2">
          <Info />
          <Info />
          <Info />
          <Info />
          <Info />
          <Info />
        </div>
      </div>
    </div>
  );
};

export default Current;
