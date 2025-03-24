import { useState } from "react";
import CopyButton from "./CopyButton";

const ShowAccBttn = ({ text, list }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen((b) => !b)}>{text}</button>
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
      <div className="title">마음 전하실 곳</div>
      <ShowAccBttn
        text="신랑측 계좌 보기"
        list={[
          ["신동진", "우리", "978-045427-02-101"],
          ["신완기", "신한", "110-048-831781"],
          ["김명재", "국민", "465125-91-106926"],
        ]}
      />
      <ShowAccBttn
        text="신부측 계좌 보기"
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
