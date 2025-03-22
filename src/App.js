import React, { useState } from "react";
import InvitBox from "./components/InvitBox";
import "./App.css";
import weddingPhoto from "./images/main.jpg";
import DateBox from "./components/DateBox";

const copyToClipboard = (text, almsg = "계좌번호가 복사되었습니다!") => {
  navigator.clipboard
    .writeText(text)
    .then(() => alert(almsg))
    .catch((err) => console.error("복사 실패:", err));
};

const accInfoList = [
  ["신동진", "우리", "978-045427-02-101"],
  ["최인아", "신한", "110-437-946984"],
  ["신완기", "신한", "110-048-831781"],
  ["김명재", "국민", "465125-91-106926"],
  ["최삼태", "부산", "224-12-021215-4"],
  ["이영욱", "국민", "666601-04-118304"],
];

const AccList = () => {
  const [accNum, setAccNum] = useState(-1);

  let accBttnList = [];
  let accInfo = [];
  for (let i = 0; i < accInfoList.length; i++) {
    accInfo = accInfoList[i];
    accBttnList = [
      ...accBttnList,
      <button
        key={`Acc-${i}`}
        className={accNum === i ? "act" : ""}
        onClick={() => {
          if (i === accNum) {
            setAccNum(-1);
          } else {
            setAccNum(i);
          }
        }}
      >
        {accInfo[0]}
      </button>,
    ];
  }
  return (
    <div className="acc-list">
      <div className="acc-bttn">{accBttnList}</div>
      <div className="acc-info">
        {accNum > -1 ? (
          <>
            <div className="bnk">{accInfoList[accNum][1]}</div>
            <div className="num">{accInfoList[accNum][2]}</div>
            <button
              onClick={() =>
                copyToClipboard(
                  accInfoList[accNum][2],
                  "계좌번호가 복사되었습니다."
                )
              }
            >
              복사
            </button>
          </>
        ) : (
          <div>이름을 선택하세요.</div>
        )}
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="container">
      <div className="img-box">
        <img src={weddingPhoto} alt="동진 인아 사진" />
        <div className="overlay-text">
          <p>동진이와 인아의</p>
          <p>결혼식에 초대합니다.</p>
        </div>
        <div className="out-text">
          <p>2025년 5월 24일 토요일 낮 11시</p>
          <p>서울대학교 연구공원 웨딩홀</p>
        </div>
      </div>

      <InvitBox />

      <DateBox />

      <div className="loca-box">
        <h2> 서울대학교 연구공원 웨딩홀</h2>
        <div className="loca-map">지도?</div>
        <div>
          서울 관악구 관악로 1 연구공원 본관 1층
          <button
            onClick={() =>
              copyToClipboard(
                "서울 관악구 관악로 1 연구공원 본관 1층",
                "결혼식장 주소가 복사되었습니다."
              )
            }
          >
            복사
          </button>
        </div>
        <div>
          <button
            onClick={() =>
              window.open(
                "https://map.naver.com/p/search/서울대학교%20연구공원%20웨딩홀/place/13321741",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            네이버 지도에서 열기
          </button>
        </div>
        <div>
          <button
            onClick={() => window.open("", "_blank", "noopener,noreferrer")}
          >
            다음 지도에서 열기
          </button>
        </div>
        <div>
          <button
            onClick={() => window.open("", "_blank", "noopener,noreferrer")}
          >
            T맵에서 열기
          </button>
        </div>
      </div>

      <div className="hline" />

      <div className="acc-box">
        <h2>마음 전하실 곳</h2>
        <AccList />
      </div>

      <div className="hline" />

      <div className="gal-box">
        <h2>동진 &amp; 인아</h2>
        <p>사진 넣을 곳</p>
      </div>
    </div>
  );
}

export default App;
