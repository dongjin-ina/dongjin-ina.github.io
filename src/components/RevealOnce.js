import { useEffect, useRef, useState } from "react";

const RevealOnce = ({ children, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (!isVisible && divRef.current) {
        const rect = divRef.current.getBoundingClientRect();
        const threshold = (window.innerHeight * 2) / 3;

        if (rect.top <= threshold) setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  return (
    <div
      ref={divRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.8s ease",
      }}
    >
      {children}
    </div>
  );
};

export default RevealOnce;
