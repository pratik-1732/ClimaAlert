import React from "react";

const Info = ({ data }) => {
  if (!data) return console.log("data not recieved in info.jsx");
  const { name, val, bgColor } = data;
  return (
    <div className="flex flex-col justify-around bg-blue-300 items-center w-30 h-32 p-3 rounded-md text-center overflow-hidden">
      <span
        typeof="square"
        className="h-6 w-6 mb-3"
        style={{ backgroundColor: bgColor }}
      ></span>
      <div className="flex flex-col">
        <p className="text-white text-sm font-medium break-words mb-3">{name}</p>
        <p className="text-white text-sm font-medium">{val}</p>
      </div>
    </div>
  );
};

export default Info;
