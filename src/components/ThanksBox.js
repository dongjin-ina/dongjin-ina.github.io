import thanks from "../images/thanks.jpg";

const ThanksBox = () => {
  return (
    <div className="thanks-box">
      <img src={thanks} alt="" style={{ width: "100%" }} />
      <div className="title-text">
        <div className="thanks">축하해주셔서 감사합니다.</div>
        <div className="dongjin-ina">-신동진·최인아 드림-</div>
      </div>
    </div>
  );
};

export default ThanksBox;
