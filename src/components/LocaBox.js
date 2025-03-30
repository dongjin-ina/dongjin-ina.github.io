// import CopyButton from "./CopyButton";
import naverMap from "../icons/naver_map.png";
import kakaoMap from "../icons/kakao_map.png";
import tMap from "../icons/t_map.png";
import bus from "../icons/bus.svg";
import car from "../icons/car.png";
import RevealOnce from "./RevealOnce";
import mapImg from "../icons/map.png";
import mapBack from "../icons/map_back.png";
import mapSubway from "../icons/map_subway.png";
import mapBusBegin from "../icons/map_bus_begin.png";
import mapBusEnd from "../icons/map_bus_end.png";
import mapBusHorz from "../icons/map_bus_horz.png";
import mapBusDiag from "../icons/map_bus_diag.png";
import mapWedding from "../icons/map_wedding.png";
import mapRoute1 from "../icons/map_route1.png";
import mapRoute2 from "../icons/map_route2.png";
import mapRoute3 from "../icons/map_route3.png";
import mapFireworks from "../icons/map_fireworks.png";
import { useEffect, useState } from "react";

const LocaMap = () => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (stage === 0) {
      setTimeout(() => {
        setStage(1);
      }, 300);
    } else if (stage === 1) {
      setTimeout(() => {
        setStage(2);
      }, 300);
    } else if (stage === 2) {
      setTimeout(() => {
        setStage(3);
      }, 300);
    } else if (stage === 3) {
      setTimeout(() => {
        setStage(4);
      }, 300);
    } else if (stage === 4) {
      setTimeout(() => {
        setStage(5);
      }, 400);
    } else if (stage === 5) {
      setTimeout(() => {
        setStage(6);
      }, 600);
    }
  }, [stage]);

  return (
    <div className="loca-map">
      {/* <img src={mapImg} alt="" style={{ width: "20rem" }} /> */}
      <img
        src={mapBack}
        alt=""
        style={{
          width: "20rem",
        }}
      />
      <img
        className={`loca-obj ${stage > -1 ? "shake" : ""}`}
        src={mapSubway}
        alt=""
        style={{ width: "4rem", left: "4.1rem", top: "12.9rem" }}
      />
      <div
        className="loca-obj"
        style={{
          width: stage > 0 ? "7.2rem" : "0rem",
          transition: "width 0.3s ease",
          overflow: "hidden",
          left: "5.7rem",
          top: "15.2rem",
        }}
      >
        <img src={mapRoute1} alt="" style={{ width: "7.2rem" }} />
      </div>
      <img
        className={`loca-obj ${stage > 1 ? "shake" : ""}`}
        src={mapBusBegin}
        alt=""
        style={{ width: "5.4rem", left: "13.5rem", top: "15rem" }}
      />
      <img
        className="loca-obj"
        src={mapBusDiag}
        alt=""
        style={{
          width: "1.3rem",
          left: "11.0rem",
          top: "14.5rem",
          opacity: stage > 1 ? "1" : "0",
          visibility: stage > 3 ? "hidden" : "visible",
          transform: stage > 2 ? "translate(0.8rem,-1.6rem)" : "",
          transition: "opacity 0.3s ease, transform 0.3s ease-in",
        }}
      />
      <img
        className="loca-obj"
        src={mapBusHorz}
        alt=""
        style={{
          width: "2.2rem",
          left: "12.1rem",
          top: "13rem",
          visibility: stage === 4 ? "visible" : "hidden",
          transform: stage > 3 ? "translate(2.7rem)" : "",
          transition: "transform 0.4s linear",
        }}
      />
      <div
        className="loca-obj"
        style={{
          width: stage > 3 ? "5.8rem" : "0",
          overflow: "hidden",
          left: "12.5rem",
          top: "9.4rem",
          transition: "width 0.8s linear",
        }}
      >
        <img src={mapRoute2} alt="" style={{ width: "5.8rem" }} />
      </div>
      <img
        className="loca-obj"
        src={mapBusDiag}
        alt=""
        style={{
          width: "1.3rem",
          left: "16.1rem",
          top: "12.1rem",
          // opacity: stage > 4 ? "1" : "0",
          visibility: stage > 4 ? "visible" : "hidden",
          transform: stage > 4 ? "translate(1.7rem,-4.8rem)" : "",
          transition: "transform 0.7s ease-out",
        }}
      />
      <img
        className={`loca-obj ${stage > 5 ? "shake" : ""}`}
        src={mapBusEnd}
        alt=""
        style={{
          width: "3rem",
          left: "18.9rem",
          top: "8.9rem",
        }}
      />
      <img
        className="loca-obj"
        src={mapWedding}
        alt=""
        style={{ width: "4.2rem", left: "5.7rem", top: "7.5rem" }}
      />
      <img
        className="loca-obj"
        src={mapRoute3}
        alt=""
        style={{ width: "11rem", left: "9.4rem", top: "5.4rem" }}
      />
      <img
        className="loca-obj"
        src={mapFireworks}
        alt=""
        style={{ width: "5.2rem", left: "4.7rem", top: "0.7rem" }}
      />
    </div>
  );
};

const LocaButton = ({ text, icoSrc, link1, link2 }) => {
  return (
    <button
      onClick={() => {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        if (isMobile) {
          // 앱으로 열기 시도
          window.location.href = link1;

          // 앱이 없을 경우 웹으로 연결
          setTimeout(() => {
            window.location.href = link2;
          }, 800);
        } else {
          // 데스크탑에서는 바로 웹으로 열기
          window.open(link2, "_blank", "noopener,noreferrer");
        }
      }}
    >
      <img src={icoSrc} alt="" />
      {text}
    </button>
  );
};

const LocaBox = () => {
  return (
    <RevealOnce className="loca-box">
      <div className="title">오시는 길</div>
      <div className="loca-address">
        <div>서울 관악구 관악로 1</div>
        <div>서울대학교 연구공원 웨딩홀</div>
        {/* <CopyButton
          text="서울대학교 연구공원 웨딩홀"
          almsg="결혼식장 주소가 복사되었습니다."
        /> */}
      </div>
      <LocaMap />
      <div className="bttns">
        <LocaButton
          text="네이버지도"
          icoSrc={naverMap}
          link1="nmap://search?query=서울대학교 연구공원 웨딩홀"
          link2="https://map.naver.com/v5/search/서울대학교%20연구공원%20웨딩홀"
        />
        <LocaButton
          text="카카오네비"
          icoSrc={kakaoMap}
          link1="kakaonavi://search?q=서울대학교 연구공원 웨딩홀"
          link2="https://map.kakao.com/?q=서울대학교 연구공원 웨딩홀"
        />
        <LocaButton
          text="티맵"
          icoSrc={tMap}
          link1="tmap://search?name=서울대학교 연구공원 웨딩홀"
          link2="https://www.google.com/search?q=서울대학교+연구공원+웨딩홀"
        />
      </div>
      <div className="bttn-notice">
        위 아이콘을 누르시면 길 안내가 시작됩니다.
      </div>
      <div className="howtoget">
        <div>
          <div className="object">
            <img className="bus_ico" src={bus} alt="대중교통" />
            <div>대중교통</div>
          </div>
          <div className="description">
            <p>지하철 2호선 낙성대역 4번출구 - 관악 02 버스 승차</p>
            <p>서울대 후문·연구공원 정류장 하차 - 도보 5분</p>
          </div>
        </div>
        <div>
          <div className="object">
            <img className="car_ico" src={car} alt="주차안내" />
            <div>주차안내</div>
          </div>
          <div className="description">
            <p>웨딩홀 내 지하주차장이 마련되어 있습니다.</p>
            <p>서울대 정문 및 후문 통과시 통행료가 부과되오니</p>
            <p>후문 통과 전 좌회전하시기 바랍니다.</p>
          </div>
        </div>
        <div className="notice">
          <p>지하철역 및 학교 정문으로부터 거리가 머니</p>
          <p>버스 또는 차량을 이용해주시기 바랍니다.</p>
        </div>
      </div>
    </RevealOnce>
  );
};

export default LocaBox;
