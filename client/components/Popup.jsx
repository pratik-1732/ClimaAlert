import React from "react";

const Popup = ({ message, onClose }) => {
  return (
    <div className="fixed top-1/3 left-1/2 transform -translate-x-1/2 bg-white border-2 border-blue-400 text-black px-8 py-6 rounded-lg shadow-lg z-50">
      <div className="flex flex-col items-center">
        <p className="mb-8 font-semibold">{message}</p>
        <button
          onClick={onClose}
          className="bg-green-500 text-white text-md font-semibold px-6 py-2 rounded cursor-pointer"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default Popup;
