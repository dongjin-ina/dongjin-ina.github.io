import React from "react";
import ImgBox from "./components/ImgBox";
import StampBox from "./components/StampBox";
import InvitBox from "./components/InvitBox";
import DateBox from "./components/DateBox";
import LocaBox from "./components/LocaBox";
import AccBox from "./components/AccBox";
import Hline from "./components/Hline";
import "./App.css";

function App() {
  return (
    <div className="container">
      <ImgBox />

      <StampBox />

      <InvitBox />

      <Hline />

      <DateBox />

      <Hline />

      <LocaBox />

      <Hline />

      <AccBox />

      <div className="hline" />

      <div className="gal-box">
        <h2>동진 &amp; 인아</h2>
        <p>사진 넣을 곳</p>
      </div>
    </div>
  );
}

export default App;
