// import CopyButton from "./CopyButton";
import naverMap from "../icons/naver_map.png";
import kakaoMap from "../icons/kakao_map.png";
import tMap from "../icons/t_map.png";
import bus from "../icons/bus.svg";
import car from "../icons/car.png";
import RevealOnce from "./RevealOnce";
// import mapImg from "../icons/map.png";
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
import { useEffect, useRef, useState } from "react";

const LocaMap = () => {
  const [stage, setStage] = useState(-1);
  const mapRef = useRef(null);

  useEffect(() => {
    if (stage === -1) {
      if (mapRef.current) {
        const handleScroll = () => {
          const rect = mapRef.current.getBoundingClientRect();
          const threshold = (window.innerHeight * 1) / 2;
          if (rect.top <= threshold) setStage(0);
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
      }
    } else if (stage === 0) {
      const stageTime = setTimeout(() => {
        setStage(1);
      }, 500); // 지하철역
      return () => clearTimeout(stageTime);
    } else if (stage === 1) {
      const stageTime = setTimeout(() => {
        setStage(2);
      }, 400); // 이동
      return () => clearTimeout(stageTime);
    } else if (stage === 2) {
      const stageTime = setTimeout(() => {
        setStage(3);
      }, 500); // 버스출발역
      return () => clearTimeout(stageTime);
    } else if (stage === 3) {
      const stageTime = setTimeout(() => {
        setStage(4);
      }, 100); // 이동
      return () => clearTimeout(stageTime);
    } else if (stage === 4) {
      const stageTime = setTimeout(() => {
        setStage(5);
      }, 300); // 이동
      return () => clearTimeout(stageTime);
    } else if (stage === 5) {
      const stageTime = setTimeout(() => {
        setStage(6);
      }, 400); // 이동
      return () => clearTimeout(stageTime);
    } else if (stage === 6) {
      const stageTime = setTimeout(() => {
        setStage(7);
      }, 500); // 버스도착역
      return () => clearTimeout(stageTime);
    } else if (stage === 7) {
      const stageTime = setTimeout(() => {
        setStage(8);
      }, 500); // 이동
      return () => clearTimeout(stageTime);
    } else if (stage === 8) {
      const stageTime = setTimeout(() => {
        setStage(-1);
      }, 1500); // 웨딩홀 & 폭죽
      return () => clearTimeout(stageTime);
    }
  }, [stage]);

  return (
    <div ref={mapRef} className="loca-map">
      {/* <img src={mapImg} alt="" style={{ width: "20rem" }} /> */}
      <img src={mapBack} alt="" style={{ width: "20rem" }} />
      {/* 지하철철역 */}
      <img
        className={`loca-obj ${stage >= 0 ? "shake" : ""}`}
        src={mapSubway}
        alt=""
        style={{ width: "4rem", left: "4.1rem", top: "12.9rem" }}
      />
      {/* 길: 5.7rem */}
      <div
        className="loca-obj"
        style={{
          width: stage >= 1 ? "7.2rem" : "0rem",
          transition: stage >= 1 ? "width 0.4s ease" : "",
          overflow: "hidden",
          left: "5.7rem",
          top: "15.2rem",
        }}
      >
        <img src={mapRoute1} alt="" style={{ width: "7.2rem" }} />
      </div>
      {/* 버스출발역 */}
      <img
        className={`loca-obj ${stage >= 2 ? "shake" : ""}`}
        src={mapBusBegin}
        alt=""
        style={{ width: "5.4rem", left: "13.5rem", top: "15rem" }}
      />
      {/* 버스: 1.5rem / 3.9rem / 5.6rem */}
      <img
        className="loca-obj" /* Bus */
        src={stage === 4 ? mapBusHorz : mapBusDiag}
        alt=""
        style={{
          width: stage === 4 ? "2.2rem" : "1.3rem",
          left: "11.0rem",
          top: "14.5rem",
          opacity: stage >= 2 ? "1" : "0",
          transform:
            stage === 3
              ? "translate(0.9rem,-1.4rem)"
              : stage === 4
              ? "translate(4.6rem,-1.6rem)"
              : stage >= 5
              ? "translate(6.8rem,-7.2rem)"
              : "",
          transition:
            stage >= 2
              ? `opacity 0.4s ease, transform ${
                  stage === 3
                    ? "0.1s ease-in"
                    : stage === 4
                    ? "0.3s linear"
                    : stage >= 5
                    ? "0.4s ease-out"
                    : ""
                }`
              : "",
        }}
      />
      {/* 길: 5.8rem */}
      <div
        className="loca-obj"
        style={{
          width: stage === 4 ? "3.5rem" : stage >= 5 ? "5.8rem" : "0",
          overflow: "hidden",
          left: "12.5rem",
          top: "9.4rem",
          transition: stage >= 4 ? "width 0.4s ease" : "",
        }}
      >
        <img src={mapRoute2} alt="" style={{ width: "5.8rem" }} />
      </div>
      {/* 버스도착역 */}
      <img
        className={`loca-obj ${stage >= 6 ? "shake" : ""}`}
        src={mapBusEnd}
        alt=""
        style={{
          width: "3rem",
          left: "18.9rem",
          top: "8.9rem",
        }}
      />
      {/* 길: 11rem */}
      <div
        className="loca-obj"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          width: stage >= 7 ? "11rem" : "0",
          right: "4.6rem",
          top: "5.4rem",
          overflow: "hidden",
          transition: stage >= 7 ? "width 0.5s ease" : "",
        }}
      >
        <img src={mapRoute3} alt="" style={{ width: "11rem", right: "0" }} />
      </div>
      {/* 웨딩홀 */}
      <img
        className={`loca-obj ${stage >= 8 ? "shake" : ""}`}
        src={mapWedding}
        alt=""
        style={{ width: "4.2rem", left: "5.7rem", top: "7.5rem" }}
      />
      {/* 폭죽 */}
      <img
        className={`loca-obj ${stage >= 8 ? "shine" : ""}`}
        src={mapFireworks}
        alt=""
        style={{
          height: "3rem",
          left: "4.7rem",
          top: "0.7rem",
          opacity: stage >= 8 ? "1" : "0",
        }}
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
