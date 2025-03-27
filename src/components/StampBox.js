import titleStamp from "../icons/title_stamp.png";
import RevealOnce from "./RevealOnce";

const StampBox = () => {
  return (
    <RevealOnce className="stamp-box">
      <img src={titleStamp} alt="장소-시간" />
      <div className="overlay-text">
        <p>2025. 5. 24. 토요일 낮 11시</p>
        <p>서울대학교 연구공원 웨딩홀</p>
      </div>
    </RevealOnce>
  );
};

export default StampBox;
