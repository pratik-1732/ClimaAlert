import React from "react";

const Info = () => {
  return (
    <div className="flex flex-col bg-blue-300 items-center p-3 rounded-md">
      <img className="h-7 w-7 bg-red-600 mb-3" />
      <p className="text-white text-sm font-medium">humidity</p>
      <p className="text-white text-sm font-medium">23</p>
    </div>
  );
};

export default Info;
