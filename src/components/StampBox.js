import titleStamp from "../icons/title_stamp.png";

const StampBox = () => {
  return (
    <div className="stamp-box">
      <img src={titleStamp} alt="장소-시간" />
      <div className="overlay-text">
        <p>2025. 5. 24. 토요일 낮 11시</p>
        <p>서울대학교 연구공원 웨딩홀</p>
      </div>
    </div>
  );
};

export default StampBox;
