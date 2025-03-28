import { useEffect, useState } from "react";
import RevealOnce from "./RevealOnce";
import photoBbeum1 from "../icons/photo_bbeum_1.png";
import photoBbeum2 from "../icons/photo_bbeum_2.png";
import photoDung1 from "../icons/photo_dung_1.png";
import photoDung2 from "../icons/photo_dung_2.png";
import photoDung3 from "../icons/photo_dung_3.png";

const importAll = (r) => r.keys().map(r);
const galImgs = importAll(require.context("../images", false, /gal\d+\.jpg$/));
const galThumbImgs = importAll(
  require.context("../images", false, /galThumb\d+\.jpg$/)
);

const GalBox = () => {
  const [isFlashing, setIsFlashing] = useState(true);
  const [dungPos, setDungPos] = useState(0);
  const [dungDir, setDungDir] = useState(-1);
  const [dungRot, setDungRot] = useState(0);
  const [dung, setDung] = useState(1);

  const [imgNum, setImgNum] = useState(-1);

  const setNum = (i) => () => setImgNum(i);
  const delNum = () => setImgNum(-1);
  const nextNum = () => {
    imgNum + 1 === galImgs.length ? setImgNum(0) : setImgNum((i) => i + 1);
  };
  const prevNum = () => {
    imgNum === 0 ? setImgNum(galImgs.length - 1) : setImgNum((i) => i - 1);
  };

  useEffect(() => {
    if (isFlashing) {
      const flashInterval = setInterval(() => {
        setDung((prev) => (prev === 1 ? 2 : 1));
      }, 300);
      setTimeout(() => {
        clearInterval(flashInterval);
        setIsFlashing(false);
      }, 2400);
      return () => clearInterval(flashInterval);
    } else {
      setDung(3);
      setDungDir((d) => -d);
      let cPos = dungPos;
      const moveInterval = setInterval(() => {
        cPos = cPos + dungDir;
        if (cPos === -4 || cPos === 0) {
          clearInterval(moveInterval);
          setIsFlashing(true);
          setDung(1);
        }
        setDungPos(cPos);
      }, 300);
      return () => clearInterval(moveInterval);
    }
  }, [isFlashing]);

  return (
    <RevealOnce className="gal-box">
      <div>
        {dung}, {dungPos}
      </div>
      <div className="photo-title">
        <img
          className="photo-dung"
          src={dung === 1 ? photoDung1 : dung === 2 ? photoDung2 : photoDung3}
          alt=""
          style={{
            transform: ` translate(-3rem, 2rem) translate(${
              0.5 * dungPos
            }rem) scale(${dung === 3 ? dungDir : 1},1)`,
          }}
        />
        <img
          className="photo-bbeum"
          src={dung === 3 ? photoBbeum1 : photoBbeum2}
          alt=""
        />
      </div>
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
