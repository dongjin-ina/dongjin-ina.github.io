import React, { useState } from "react";
import InvitBox from "./components/InvitBox";
import "./App.css";
import DateBox from "./components/DateBox";
import CopyButton from "./components/CopyButton";
import ImgBox from "./components/ImgBox";

const copyToClipboard = (text, almsg = "계좌번호가 복사되었습니다!") => {
  navigator.clipboard
    .writeText(text)
    .then(() => alert(almsg))
    .catch((err) => console.error("복사 실패:", err));
};

const ShowAccBttn = ({ text, list }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen((b) => !b)}>{text}</button>
      {isOpen
        ? list.map((info) => (
            <div>
              <div>{info[0]}</div>
              <div>{info[1]}</div>
              <div>{info[2]}</div>
              <CopyButton text={info[2]} almsg="계좌번호가 복사되었습니다." />
            </div>
          ))
        : null}
    </div>
  );
};

function App() {
  return (
    <div className="container">
      <ImgBox />

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

      {/* <div className="hline" /> */}

      <div className="acc-box">
        <h2>마음 전하실 곳</h2>
        <ShowAccBttn
          text="신랑측 계좌 보기"
          list={[
            ["신동진", "우리", "978-045427-02-101"],
            ["신완기", "신한", "110-048-831781"],
            ["김명재", "국민", "465125-91-106926"],
          ]}
        />
        <ShowAccBttn
          text="신부측 계좌 보기"
          list={[
            ["최인아", "신한", "110-437-946984"],
            ["최삼태", "부산", "224-12-021215-4"],
            ["이영욱", "국민", "666601-04-118304"],
          ]}
        />
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
