import React from "react";

const Navbar = () => {
  return (
    <div className=" px-2 py-5 bg-blue-400 flex justify-around  shadow-sm">
      <div className="flex items-center">
        <img src="/images/logo.png" className="h-15 w-15 mr-3" />
        <h2 className="font-bold text-3xl">ClimaAlert</h2>
      </div>

      <div className=" rounded-3xl px-3 py-2">
        <input
          className="border-2 rounded-xl border-blue-300 outline-none px-4 py-1 mr-3 text-sm bg-transparent font-bold text-white"
          type="search"
          placeholder="Enter Place"
        />
        <button className="rounded-xl px-4 py-1 bg-blue-800 text-white text-sm font-medium cursor-pointer outline-none">
          Search
        </button>
      </div>
    </div>
  );
};

export default Navbar;
