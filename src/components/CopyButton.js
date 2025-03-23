import CopyIcon from "../icons/copy_ico.png";

const copyToClipboard = (text, almsg = "계좌번호가 복사되었습니다!") => {
  navigator.clipboard
    .writeText(text)
    .then(() => alert(almsg))
    .catch((err) => console.error("복사 실패:", err));
};

const CopyButton = ({ text, almsg }) => {
  return (
    <button onClick={() => copyToClipboard(text, almsg)}>
      <div>복사</div>
      <img src={CopyIcon} alt="복사" />
    </button>
  );
};

export default CopyButton;
