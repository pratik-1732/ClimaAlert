import React from "react";
import axios from "axios";
import { useState } from "react";
import Popup from "./Popup";

const Subscribe = () => {
  const [Name, setName] = useState("");
  const [Number, setNumber] = useState("");
  const [Pincode, setPincode] = useState("");

  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/subscribe`,
        {
          Name,
          Number,
          Pincode,
        }
      );

      setPopupMessage(
        `Hello ${res.data.Name}, you have subscribed successfully...`
      );
      setShowPopup(true);

      setName("");
      setNumber("");
      setPincode("");
    } catch (err) {
      console.error("Subscription Error:", err);
      setPopupMessage("Something went wrong. Please try again.");
      setShowPopup(true);
    }
  };

  return (
    <div className="bg-blue-400 mx-20 my-15 p-10 rounded-2xl flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-20 text-white">
        Subscribe to get updates to your whatsapp
      </h1>
      <div className=" flex gap-40">
        <div className="flex flex-col items-center text-white">
          <h4 className="text-lg font-bold mb-4">Don't miss out!</h4>
          <p>Join thousands of subscribers who trusts us.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex gap-4 items-center">
          <div className="flex flex-col gap-3">
            <div className="flex gap-4 items-center">
              <label className="text-sm text-white font-semibold">
                Enter Your Name:
              </label>
              <input
                className="border-2 rounded-lg border-blue-300 outline-none px-4 py-1 mr-5 bg-transparent text-white text-sm font-bold"
                type="text"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="flex gap-4 items-center">
              <label className="text-sm text-white font-semibold">
                Enter Your Mobile No.:
              </label>
              <input
                className="border-2 rounded-lg border-blue-300 outline-none px-4 py-1 mr-5 bg-transparent text-white text-sm font-bold"
                type="tel"
                value={Number}
                onChange={(e) => setNumber(e.target.value)}
                required
                maxLength={10}
              />
            </div>
            {Number.length < 10 && (
              <p className=" text-sm text-red-700">
                Minimum 10 digits required
              </p>
            )}
            <div className="flex gap-4 items-center">
              <label className="text-sm text-white font-semibold">
                Enter Your Pincode:
              </label>
              <input
                className="border-2 rounded-lg border-blue-300 outline-none px-4 py-1 mr-5 bg-transparent text-white text-sm font-bold"
                type="text"
                value={Pincode}
                onChange={(e) => setPincode(e.target.value)}
                required
                maxLength={6}
              />
            </div>
          </div>
          <button className="rounded-lg px-6 py-2 bg-blue-800 text-white text-sm font-medium cursor-pointer outline-none">
            Subscribe
          </button>
        </form>
      </div>
      {showPopup && (
        <Popup message={popupMessage} onClose={() => setShowPopup(false)} />
      )}
    </div>
  );
};

export default Subscribe;
