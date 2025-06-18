import React from "react";

const Subscribe = () => {
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
        <div className="">
          <input
            className="border-2 rounded-lg border-blue-300 outline-none px-4 py-1 mr-5 bg-transparent text-white text-sm font-bold"
            type="mobileNum" placeholder="Enter Mobile No. "
          />
          <button className="rounded-lg px-6 py-2 bg-blue-800 text-white text-sm font-medium cursor-pointer outline-none">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
