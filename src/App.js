import React from "react";
import "./App.css";

import ImgBox from "./components/ImgBox";
import StampBox from "./components/StampBox";
import InvitBox from "./components/InvitBox";
import DateBox from "./components/DateBox";
import LocaBox from "./components/LocaBox";
import AccBox from "./components/AccBox";
import GalBox from "./components/GalBox";
import ThanksBox from "./components/ThanksBox";
import FinalBox from "./components/FinalBox";

function App() {
  return (
    <div className="container">
      <ImgBox />
      <StampBox />
      <InvitBox />
      {/* <Hline /> */}
      <DateBox />
      <LocaBox />
      <AccBox />
      <GalBox />
      <ThanksBox />
      <FinalBox />
    </div>
  );
}

export default App;
