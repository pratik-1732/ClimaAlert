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
      <div className="flex items-center">
        <img src="/images/logo.png" className="h-15 w-15 mr-3" />
        <h2 className="font-bold text-3xl">ClimaAlert</h2>
      </div>

      <form className=" rounded-3xl px-3 py-2" onSubmit={handleChange}>
        <input
          className="border-2 rounded-xl border-blue-300 outline-none px-4 py-1 mr-3 text-sm bg-transparent font-bold text-white"
          type="search"
          placeholder="Enter Place"
          value={place}
          onChange={(e) => {
            setPlace(e.target.value);
          }}
        />
        <button className="rounded-xl px-4 py-1 bg-blue-800 text-white text-sm font-medium cursor-pointer outline-none">
          Search
        </button>
      </form>
    </div>
  );
};

export default Navbar;
