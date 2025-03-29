// import CopyButton from "./CopyButton";
import naverMap from "../icons/naver_map.png";
import kakaoMap from "../icons/kakao_map.png";
import tMap from "../icons/t_map.png";
import bus from "../icons/bus.svg";
import car from "../icons/car.png";
import RevealOnce from "./RevealOnce";
import mapBack from "../icons/map_back.png";
import mapSubway from "../icons/map_subway.png";

const LocaMap = () => {
  return (
    <div className="loca-map">
      <img
        src={mapBack}
        alt=""
        style={{
          width: "20rem",
        }}
      />
      <img src={mapSubway} alt="" style={{ width: "4rem" }} />
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
      {/* <img width="90%" src={mapImg} alt="지도" /> */}
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
            <img src={bus} alt="대중교통" />
            <div>대중교통</div>
          </div>
          <div className="description">
            <p>지하철 2호선 낙성대역 4번출구 - 관악 02 버스 승차</p>
            <p>서울대 후문·연구공원 정류장 하차 - 도보 5분</p>
          </div>
        </div>
        <div>
          <div className="object">
            <img src={car} alt="주차안내" />
            <div>주차안내</div>
          </div>
          <div className="description">
            <p>웨딩홀 내 지하주차장이 마련되어 있습니다.</p>
            <p className="fontRed">
              서울대 정문 및 후문 통과시 통행료가 부과되오니
            </p>
            <p className="fontRed">후문 통과 전 좌회전하시기 바랍니다.</p>
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
