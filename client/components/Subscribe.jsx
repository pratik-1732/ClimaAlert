import React from "react";
import axios from "axios";
import { useState } from "react";
import Popup from "./Popup";
import OtpPopUp from "./otpPopup";
import { signInWithPhoneNumber } from "firebase/auth";
import { auth, RecaptchaVerifier } from "../firebase";

const Subscribe = () => {
  const [Name, setName] = useState("");
  const [Number, setNumber] = useState("");
  const [Pincode, setPincode] = useState("");

  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const [confirmationResult, setConfirmationResult] = useState(null);
  const [showOtpPopup, setShowOtpPopup] = useState(null);

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "subscribe-button",
        {
          size: "invisible",
          callback: (response) => {
            console.log("Recaptcha Verified");
          },
        }
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setupRecaptcha();
    const appVerifier = window.recaptchaVerifier;
    const phoneNum = `+91${Number}`;

    try {
      const confirmation = await signInWithPhoneNumber(
        auth,
        phoneNum,
        appVerifier
      );
      setConfirmationResult(confirmation);
      setShowOtpPopup(true);
    } catch (error) {
      console.error("SMS not sent", error);
      alert("Failed to send OTP. Try again.");
    }
  };

  const otpSuccessHandler = async () => {
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
    <div className="p-4 flex items-center justify-center">
      <div className=" bg-white/10 backdrop-blur-lg border border-white/20 mx-4 md:mx-8 my-8 md:my-15 p-7 rounded-3xl shadow-2xl flex flex-col items-center max-w-7xl  w-full">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 md:mb-20 text-white text-center bg-clip-text leading-tight">
          Subscribe to get updates to your whatsapp
        </h1>
        <div className=" flex gap-40">
         {/* left sec content  */}
          <div className="flex flex-col items-center text-white text-center">
            <h4 className="text-lg font-bold mb-4">Don't miss out!</h4>
            <p>Join thousands of subscribers who trusts us.</p>
          </div>
          {/* form  */}
          <div
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 items-start"
          >
            <div className="flex flex-col gap-4">
              {/* name  */}
              <div className="group">
                <label className="block text-sm text-white/90 font-semibold mb-2 transition-all duration-200 group-focus-within:text-white">
                  Enter Your Name:
                </label>
                <input
                  className="w-full border-2 rounded-xl border-white/30 outline-none px-4 py-3 bg-transparent text-white text-sm font-medium placeholder-white/50 transition-all duration-300 focus:border-white/60 focus:shadow-lg focus:shadow-blue-500/20 hover:border-white/50"
                  type="text"
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  required
                />
              </div>
              {/* mo no  */}
              <div className="group">
                <label className="block text-sm text-white/90 font-semibold mb-2 transition-all duration-200 group-focus-within:text-white">
                  Enter Your Mobile No.:
                </label>
                <div className="flex flex-col">
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 text-sm font-medium">
                      +91
                    </span>
                    <input
                      className="w-full border-2 rounded-xl border-white/30 outline-none pl-12 pr-4 py-3 bg-transparent text-white text-sm font-medium placeholder-white/50 transition-all duration-300 focus:border-white/60 focus:shadow-lg focus:shadow-blue-500/20 hover:border-white/50"
                      type="tel"
                      value={Number}
                      onChange={(e) => setNumber(e.target.value)}
                      placeholder="Your mobile number"
                      required
                      maxLength={10}
                    />
                  </div>
                  {Number.length > 0 && Number.length < 10 && (
                    <p className="text-xs text-red-100 bg-red-800/90 px-3 py-2 rounded-lg backdrop-blur-sm border border-red-100/70 mt-5">
                      Mobile number should be 10 digits.
                    </p>
                  )}
                </div>
              </div>
              {/* pincode  */}
              <div className="group">
                <label className="block text-sm text-white/90 font-semibold mb-2 transition-all duration-200 group-focus-within:text-white">
                  Enter Your Pincode:
                </label>
                <input
                  className="w-full border-2 rounded-xl border-white/30 outline-none px-4 py-3 bg-transparent text-white text-sm font-medium placeholder-white/50 transition-all duration-300 focus:border-white/60 focus:shadow-lg focus:shadow-blue-500/20 hover:border-white/50"
                  type="text"
                  value={Pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  placeholder="Your area pincode"
                  required
                  maxLength={6}
                />
              </div>
            </div>
            {/* button  */}
            <button
              id="subscribe-button"
              type="button"
              onClick={handleSubmit}
              className="group relative overflow-hidden rounded-xl px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold cursor-pointer outline-none self-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 active:translate-y-0 active:shadow-md"
            >
              <span className="relative z-10 flex items-center gap-2">
                Subscribe
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
        {showPopup && (
          <Popup message={popupMessage} onClose={() => setShowPopup(false)} />
        )}

        {showOtpPopup && confirmationResult && (
          <OtpPopUp
            confirmationResult={confirmationResult}
            onSuccess={handleOtpSuccess}
            onCancel={() => setShowOtpPopup(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Subscribe;
