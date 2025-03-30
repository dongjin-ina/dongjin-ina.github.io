import { useEffect } from "react";
import shareIco from "../icons/share_ico.png";
import copyIco from "../icons/copy_ico.png";

const FinalBox = () => {
  useEffect(() => {
    // 카카오 SDK 스크립트 추가
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    script.onload = () => {
      if (window.Kakao && !window.Kakao.isInitialized()) {
        window.Kakao.init("a0968cd4dba7e9802a424a955a5fa705"); // 카카오 SDK 초기화
      }
    };
    document.body.appendChild(script);

    // Clean up when component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const shareKakao = () => {
    if (!window.Kakao) return;

    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "동진♡인아 결혼합니다.",
        description: "25년 5월 24일 11시 | 서울대 연구공원 웨딩홀",
        imageUrl:
          "https://raw.githubusercontent.com/dongjin-ina/dongjin-ina.github.io/main/src/images/thumb_3x4.png",
        imageWidth: 900, // 추가
        imageHeight: 1200,
        link: {
          mobileWebUrl: "https://dongjin-ina.github.io/",
          webUrl: "https://dongjin-ina.github.io/",
        },
      },
      buttons: [
        {
          title: "모바일청첩장 보기",
          link: {
            mobileWebUrl: "https://dongjin-ina.github.io/",
            webUrl: "https://dongjin-ina.github.io/",
          },
        },
      ],
    });
  };

  return (
    <div className="final-box">
      <button className="share-bttn" onClick={shareKakao}>
        카카오톡으로 청첩장 전하기
        <img src={shareIco} alt="" />
      </button>
      <button className="copy-bttn" onClick={shareKakao}>
        모바일 청첩장 주소 복사하기
        <img src={copyIco} alt="" />
      </button>
    </div>
  );
};

export default FinalBox;
