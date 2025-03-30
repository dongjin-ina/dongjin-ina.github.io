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
  const [dung, setDung] = useState(1);
  const [imgNum, setImgNum] = useState(-1);
  const [imgPos, setImgPos] = useState("0");
  const [imgMotion, setImgMotion] = useState(false);

  const setNum = (i) => () => setImgNum(i);
  const delNum = () => {
    setImgNum(-1);
    setImgPos("0");
  };

  const handleMouseDown = (pe) => {
    pe.preventDefault();
    let px = pe.clientX;
    let dx = 0;

    setImgMotion(false);
    if (imgPos === "25rem") {
      setImgPos(() => "0");
      setImgNum((n) => (n - 1 + galImgs.length) % galImgs.length);
    } else if (imgPos === "-25rem") {
      setImgPos(() => "0");
      setImgNum((n) => (n + 1) % galImgs.length);
    }

    const handleMouseMove = (e) => {
      dx = e.clientX - px;
      setImgPos(() => `${dx}px`);
    };
    const handleMouseUp = () => {
      setImgMotion(true);
      if (dx > 80) {
        setImgPos("25rem");
      } else if (dx < -80) {
        setImgPos("-25rem");
      } else {
        setImgPos("0");
      }
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  useEffect(() => {
    if (imgNum > -1) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [imgNum]);

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
      <div className="photo-title">
        <img
          className="photo-dung"
          src={dung === 1 ? photoDung1 : dung === 2 ? photoDung2 : photoDung3}
          alt=""
          style={{
            transform: ` translate(-5.5rem, 2rem) translate(${
              0.5 * dungPos
            }rem) scale(${dung === 3 ? dungDir : 1},1)`,
          }}
        />
        <img
          className="photo-bbeum"
          src={dung === 3 ? photoBbeum1 : photoBbeum2}
          alt=""
          style={{ transform: "translate(1rem)" }}
        />
      </div>
      <div className="gal-grid">
        {galThumbImgs.map((src, index) => (
          <img key={`gal-${index}`} src={src} alt="" onClick={setNum(index)} />
        ))}
      </div>
      {imgNum < 0 ? null : (
        <div className="gal-img">
          <button className="gal-img-close" onClick={delNum}>
            x
          </button>
          <div
            className="gal-img-inner"
            onMouseDown={handleMouseDown}
            style={{
              transform: `translateX(-25rem) translateX(${imgPos})`,
              transition: imgMotion ? "transform 0.3s ease" : null,
            }}
          >
            <img
              src={galImgs[(imgNum - 1 + galImgs.length) % galImgs.length]}
              alt=""
            />
            <img src={galImgs[imgNum]} alt="" />
            <img src={galImgs[(imgNum + 1) % galImgs.length]} alt="" />
          </div>
        </div>
      )}
    </RevealOnce>
  );
};
export default GalBox;
