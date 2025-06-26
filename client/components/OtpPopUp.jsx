import React, { useState } from "react";

const OtpPopUp = ({confirmationResult, onSuccess, onCancel}) => {
  const [otp, setOtp] = useState("");

  const handleVerify = async () => {
    if (otp.length !== 6) {
      alert("Enter a valid 6 digit OTP");
      return;
    }
    try {
      await confirmationResult.confirm(otp);
      alert("OTP Verified Successfully");
      onSuccess();
    } catch (error) {
      console.error("OTP Verification Failed", error);
      alert("Incorrect OTP, please try again");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex justify-center items-center">
      <div className="fixed top-1/3 left-1/2 transform -translate-x-1/2 flex flex-col justify-center items-center px-12 py-10 bg-white  rounded-xl shadow-lg">
        <h1 className="text-xl font-semibold mb-10">
          Verify your mobile number
        </h1>
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <div className="flex gap-3 mb-4">
            <input
              type="text"
              onChange={(e) => {
                setOtp(e.target.value);
              }}
              maxLength={6}
              className="w-full border px-4 py-2 rounded-md mb-4"
              placeholder="Enter 6-digit OTP"
            ></input>
          </div>
          <div className="flex gap-14">
            <button
              onClick={handleVerify}
              className="text-md text-white font-semibold bg-green-500 px-4 py-2 rounded-md outline-none cursor-pointer"
            >
              Verify
            </button>
            <button
              onClick={onCancel}
              className="text-md text-white font-semibold bg-green-500 px-4 py-2 rounded-md outline-none cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OtpPopUp;
