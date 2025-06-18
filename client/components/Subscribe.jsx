import React from "react";
import axios from "axios";
import { useState } from "react";
import Popup from "./Popup";

const Subscribe = () => {
  const [name, setName] = useState("");
  const [mobileNum, setMobileNum] = useState("");
  const [pincode, setPincode] = useState("");
  const [popupMessage, setPopupMessage] = useState("");

  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/subscribe`,
        {
          name,
          mobileNum,
          pincode,
        }
      );

      setPopupMessage(
        `Hello ${res.data.name}, you have subscribed successfully...`
      );
      setShowPopup(true);

      setName("");
      setMobileNum("");
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
            <input
              className="border-2 rounded-lg border-blue-300 outline-none px-4 py-1 mr-5 bg-transparent text-white text-sm font-bold"
              type="text"
              value={name}
              placeholder="Enter Your Name "
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="border-2 rounded-lg border-blue-300 outline-none px-4 py-1 mr-5 bg-transparent text-white text-sm font-bold"
              type="tel"
              value={mobileNum}
              placeholder="Enter Mobile No. "
              onChange={(e) => setMobileNum(e.target.value)}
            />
            <input
              className="border-2 rounded-lg border-blue-300 outline-none px-4 py-1 mr-5 bg-transparent text-white text-sm font-bold"
              type="text"
              value={pincode}
              placeholder="Enter Pincode "
              onChange={(e) => setPincode(e.target.value)}
            />
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
