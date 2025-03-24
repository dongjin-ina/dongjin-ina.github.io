import React, { useState } from "react";
import ImgBox from "./components/ImgBox";
import StampBox from "./components/StampBox";
import InvitBox from "./components/InvitBox";
import "./App.css";
import DateBox from "./components/DateBox";
import Hline from "./components/Hline";
import LocaBox from "./components/LocaBox";
import AccBox from "./components/AccBox";

const copyToClipboard = (text, almsg = "계좌번호가 복사되었습니다!") => {
  navigator.clipboard
    .writeText(text)
    .then(() => alert(almsg))
    .catch((err) => console.error("복사 실패:", err));
};

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
