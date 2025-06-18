import React from "react";
import Navbar from "../components/Navbar";
import Current from "../components/Current";
import Hourly from "../components/Hourly";
import SevenDay from "../components/SevenDay";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Current />
      <Hourly />
      <SevenDay />
      <Subscribe/>
      <Footer/>
    </>
  );
}

export default App;
