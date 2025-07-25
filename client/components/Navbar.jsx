import React, { useState } from "react";
import axios from "axios";

const Navbar = ({ onSearch }) => {
  const [place, setPlace] = useState("");

  const handleChange = async (e) => {
    e.preventDefault();
    if (!place.trim()) return;
    onSearch(place);
    setPlace("");
  };

  return (
    <div className=" px-2 py-5 flex justify-around  shadow-lg border-b border-white/10">
      {/* logo  */}
      <div className="flex items-center">
        <h2 className="font-bold text-2xl md:text-3xl bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent transition-all duration-300">
          ClimaAlert
        </h2>
      </div>
      {/* search */}
      <div className="relative">
        <div className="group relative">
          <div className="relative flex items-center bg-black/20 backdrop-blur-xl rounded-2xl border border-white/10">
            <div className="relative flex-1">
              <input
                className="peer w-48 sm:w-64 md:w-80 bg-transparent border-0 outline-none px-6 py-4 text-white placeholder-transparent focus:placeholder-white/50 transition-all duration-300"
                type="search"
                placeholder="Search for any city..."
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                id="search-input"
              />
            </div>

            {/* Search button */}
            <button
              onClick={handleChange}
              className="group/btn relative overflow-hidden m-1 p-3 rounded-xl  transition-all duration-300 hover:scale-105 active:scale-95 hover:cursor-pointer"
            >
              {/* search icon */}
              <svg
                className="w-5 h-5 text-white relative z-10 group-hover/btn:rotate-90 transition-transform duration-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>

              {/* Tooltip */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Search Weather
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
