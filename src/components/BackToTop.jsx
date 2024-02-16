import React, { useState } from "react";
import arrow from "../assets/arrow.svg";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 900);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 300,
      behavior: "smooth",
    });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`fixed bottom-10 right-10 p-2 transition-opacity duration-500 border-4 border-black rounded-full ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <img src={arrow} className="rotate-90 h-7 w-7" />
    </button>
  );
};

export default BackToTop;
