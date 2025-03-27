const importAll = (r) => r.keys().map(r);
const galImgs = importAll(require.context("../images", false, /gal\d+\.jpg$/));

const GalImg = ({ galSrc }) => {
  return (
    <div className="gal-img">
      <img src={galSrc} alt="" />
    </div>
  );
};

const GalBox = () => {
  return (
    <div className="gal-box">
      <div className="title">아이콘 필요</div>
      <div className="gal-grid">
        {galImgs.map((src, index) => (
          <GalImg key={`gal-${index}`} galSrc={src} />
        ))}
      </div>
    </div>
  );
};
export default GalBox;
