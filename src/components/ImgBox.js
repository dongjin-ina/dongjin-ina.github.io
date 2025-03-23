import weddingPhoto from "../images/main.jpg";
import titleUnderline from "../icons/title_underline.png";
import pigTailDung from "../icons/pigTailDung.png";
import pigTailBbeum from "../icons/pigTailBbeum.png";

const ImgBox = () => {
  return (
    <div className="img-box">
      <img src={weddingPhoto} alt="동진 인아 사진" />
      <div className="overlay-text">
        <div className="title-text">
          <div>&#x201C;</div>
          <div className="titleFont">결혼식에 초대합니다</div>
          <div>&#x201D;</div>
        </div>
        <img src={titleUnderline} alt="밑줄" />
      </div>
      <div className="tag-div">
        <img className="tag-tail-dung" src={pigTailDung} alt="동진 꼬리" />
        <img className="tag-tail-bbeum" src={pigTailBbeum} alt="동진 꼬리" />
      </div>
      <div className="out-text">
        <p>2025년 5월 24일 토요일 낮 11시</p>
        <p>서울대학교 연구공원 웨딩홀</p>
      </div>
    </div>
  );
};

export default ImgBox;
