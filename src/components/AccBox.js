import { useState } from "react";
import CopyButton from "./CopyButton";
import accImg from "../images/acc_img.jpg";

const ShowAccBttn = ({ text, list }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button className="acc-bttn" onClick={() => setIsOpen((b) => !b)}>
        {text}
      </button>
      {isOpen
        ? list.map((info, idx) => (
            <div key={`acc-${idx}`}>
              <div>{info[0]}</div>
              <div>{info[1]}</div>
              <div>{info[2]}</div>
              <CopyButton text={info[2]} almsg="계좌번호가 복사되었습니다." />
            </div>
          ))
        : null}
    </div>
  );
};

const AccBox = () => {
  return (
    <div className="acc-box">
      <img src={accImg} alt="" width="100%" />
      <div className="title">마음 전하실 곳</div>
      <div className="acc-letter">
        <p>참석이 어려우신 분들을 위해</p>
        <p>계좌번호를 기재하였습니다.</p>
        <p>너그러운 마음으로 양해 부탁드립니다.</p>
      </div>
      <ShowAccBttn
        text="신랑측에게"
        list={[
          ["신동진", "우리", "978-045427-02-101"],
          ["신완기", "신한", "110-048-831781"],
          ["김명재", "국민", "465125-91-106926"],
        ]}
      />
      <ShowAccBttn
        text="신부측에게"
        list={[
          ["최인아", "신한", "110-437-946984"],
          ["최삼태", "부산", "224-12-021215-4"],
          ["이영욱", "국민", "666601-04-118304"],
        ]}
      />
    </div>
  );
};

export default AccBox;
