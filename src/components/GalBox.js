import { useState } from "react";
import RevealOnce from "./RevealOnce";

const importAll = (r) => r.keys().map(r);
const galImgs = importAll(require.context("../images", false, /gal\d+\.jpg$/));
const galThumbImgs = importAll(
  require.context("../images", false, /galThumb\d+\.jpg$/)
);

const GalBox = () => {
  const [imgNum, setImgNum] = useState(-1);
  const setNum = (i) => () => setImgNum(i);
  const delNum = () => setImgNum(-1);
  const nextNum = () => {
    imgNum + 1 === galImgs.length ? setImgNum(0) : setImgNum((i) => i + 1);
  };
  const prevNum = () => {
    imgNum === 0 ? setImgNum(galImgs.length - 1) : setImgNum((i) => i - 1);
  };

  return (
    <RevealOnce className="gal-box">
      <div className="title">아이콘 필요</div>
      <div className="gal-grid">
        {galThumbImgs.map((src, index) => (
          <img key={`gal-${index}`} src={src} alt="" onClick={setNum(index)} />
        ))}
      </div>
      {imgNum < 0 ? null : (
        <div className="gal-img">
          <div className="close" onClick={delNum} style={{ color: "white" }}>
            X자 그림 필요
          </div>
          <img src={galImgs[imgNum]} alt="" style={{ width: "100%" }} />
        </div>
      )}
    </RevealOnce>
  );
};
export default GalBox;
