import CopyButton from "./CopyButton";
import naverMap from "../icons/naver_map.png";
import kakaoMap from "../icons/kakao_map.png";
import tMap from "../icons/t_map.png";

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
          onClick={() =>
            window.open(
              "https://map.naver.com/v5/search/서울대학교%20연구공원%20웨딩홀",
              "_blank",
              "noopener,noreferrer"
            )
          }
        >
          <img src={naverMap} alt="네이버지도" />
          네이버지도
        </button>
        <button
          onClick={() =>
            window.open(
              "kakaonavi://search?q=서울대학교 연구공원 웨딩홀",
              "_blank",
              "noopener,noreferrer"
            )
          }
        >
          <img src={kakaoMap} alt="카카오지도" />
          카카오지도
        </button>
        <button
          onClick={() =>
            window.open(
              "tmap://search?name=서울대학교 연구공원 웨딩홀",
              "_blank",
              "noopener,noreferrer"
            )
          }
        >
          <img src={tMap} alt="티맵" />
          티맵
        </button>
      </div>
    </div>
  );
};

export default LocaBox;
