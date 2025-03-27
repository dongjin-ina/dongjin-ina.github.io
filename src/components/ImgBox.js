import { useState } from "react";
import weddingPhoto from "../images/main.jpg";
import titleUnderline from "../icons/title_underline.png";
import pigTailDung from "../icons/pigTailDung.png";
import pigTailBbeum from "../icons/pigTailBbeum.png";

const ImgBox = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const handleLoaded = () => {
    setIsLoaded(true);
  };

  return (
    <div className="img-box">
      {!isLoaded && <div className="emptyImg"></div>}

      <img src={weddingPhoto} alt="" onLoad={handleLoaded} />
      <div className="overlay-text">
        <div className="title-text">
          <div>&#x201C;</div>
          <div className="titleFont">결혼식에 초대합니다</div>
          <div>&#x201D;</div>
        </div>
        <img src={titleUnderline} alt="" />
      </div>
      <div className="tag-div">
        <div className="tag-tail-dung">
          <span>신랑</span> 신동진
        </div>
        <div className="tag-tail-bbeum">
          <span>신부</span> 최인아
        </div>
        <img className="tag-tail-dung" src={pigTailDung} alt="" />
        <img className="tag-tail-bbeum" src={pigTailBbeum} alt="" />
      </div>
    </div>
  );
};

export default ImgBox;
