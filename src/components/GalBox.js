import RevealOnce from "./RevealOnce";

const importAll = (r) => r.keys().map(r);
const galImgs = importAll(
  require.context("../images", false, /galThumb\d+\.jpg$/)
);

const GalBox = () => {
  return (
    <RevealOnce className="gal-box">
      <div className="title">아이콘 필요</div>
      <div className="gal-grid">
        {galImgs.map((src, index) => (
          <img key={`gal-${index}`} src={src} alt="" />
        ))}
      </div>
    </RevealOnce>
  );
};
export default GalBox;
