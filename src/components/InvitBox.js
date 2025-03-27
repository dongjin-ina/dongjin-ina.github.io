import invitBirds from "../icons/invit_birds.png";
import RevealOnce from "./RevealOnce";

const InvitBox = () => {
  return (
    <RevealOnce className="invit-box">
      <img src={invitBirds} alt="초대합니다." />
      <div className="title">소중한 분들을 초대합니다</div>
      <div className="invit-letter">
        <p>두 사람이 한 가정을 이루고자 합니다.</p>
        <p>평생 서로 사랑하고 베풀며 살겠습니다.</p>
        <p>귀한 발걸음으로 축하해주시면 감사하겠습니다.</p>
      </div>
      <div className="invit-name">
        <div>신완기 &middot; 김명재</div>
        <div>의 차남</div>
        <div>동진</div>
      </div>
      <div className="invit-name">
        <div>최삼태 &middot; 이영욱</div>
        <div>의 장녀</div>
        <div>인아</div>
      </div>
    </RevealOnce>
  );
};

export default InvitBox;
