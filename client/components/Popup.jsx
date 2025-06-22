// src/components/Popup.jsx
import React from "react";

const Popup = ({ message, onClose }) => {
  return (
    <div className="fixed top-1/3 left-1/2 transform -translate-x-1/2 bg-white border-2 border-blue-500 text-black px-8 py-6 rounded-lg shadow-lg z-50">
      <p className="mb-4 font-semibold">{message}</p>
      <button
        onClick={onClose}
        className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
      >
        OK
      </button>
    </div>
  );
};

export default Popup;
