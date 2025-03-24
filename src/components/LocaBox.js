import CopyButton from "./CopyButton";
import naverMap from "../icons/naver_map.png";
import kakaoMap from "../icons/kakao_map.png";
import tMap from "../icons/t_map.png";
import bus from "../icons/bus.png";
import car from "../icons/car.png";

const LocaBox = () => {
  return (
    <div className="loca-box">
      <div className="title">오시는 길</div>
      <div>
        <p>서울 관악구 관악로 1</p>
        <p>서울대학교 연구공원 본관 1층 </p>
        <CopyButton
          text="서울 관악구 관악로 1 연구공원 본관 1층"
          almsg="결혼식장 주소가 복사되었습니다."
        />
      </div>
      <img src="" alt="지도" />
      <div className="bttns">
        <button
          onClick={() => {
            window.location.href =
              "naversearchapp://mapsearch?query=서울대학교 연구공원 웨딩홀";
            setTimeout(() => {
              window.open(
                "https://map.naver.com/v5/search/서울대학교%20연구공원%20웨딩홀",
                "_blank",
                "noopener,noreferrer"
              );
            }, 500);
          }}
        >
          <img src={naverMap} alt="네이버지도" />
          네이버지도
        </button>
        <button
          onClick={() => {
            window.location.href =
              "kakaonavi://search?q=서울대학교 연구공원 웨딩홀";
            setTimeout(() => {
              window.open(
                "https://map.kakao.com/?q=서울대학교 연구공원 웨딩홀",
                "_blank",
                "noopener,noreferrer"
              );
            }, 500);
          }}
        >
          <img src={kakaoMap} alt="카카오지도" />
          카카오지도
        </button>
        <button
          onClick={() => {
            window.location.href =
              "tmap://search?name=서울대학교 연구공원 웨딩홀";
            setTimeout(() => {
              window.open(
                "https://map.kakao.com/?q=서울대학교 연구공원 웨딩홀",
                "_blank",
                "noopener,noreferrer"
              );
            }, 500);
          }}
        >
          <img src={tMap} alt="티맵" />
          티맵
        </button>
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
            <p>서울대 정문 및 후문 통과시 통행료가 부과되오니</p>
            <p>후문 통과 전 좌회전하시기 바랍니다.</p>
          </div>
        </div>
        <div className="notice">
          <p>지하철역 및 학교 정문으로부터 거리가 머니</p>
          <p>버스 또는 차량을 이용해주시기 바랍니다.</p>
        </div>
      </div>
    </div>
  );
};

export default LocaBox;
