import React, { useState, useEffect } from "react";

const ButtonUp = ({ t }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const halfWindowHeight = window.innerHeight / 2;
      setShowButton(window.scrollY >= halfWindowHeight);
    };

    window.addEventListener("scroll", handleScroll);

    // Limpieza del evento al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`Btn-footer ${showButton ? "show" : "hide"}`}
      onClick={handleScrollToTop}
    >
      <svg height="1.2em" class="arrow-footer" viewBox="0 0 512 512">
        <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
      </svg>
      <p class="text-footer">{t("backTop")}</p>
    </button>
  );
};

export default ButtonUp;
