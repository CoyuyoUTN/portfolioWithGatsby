import React, { useState, useRef } from "react";

const Nav = ({ t }) => {
  const [isActive, setIsActive] = useState(false);
  const myElementRef = useRef(null);

  const handleCheckboxChange = () => {
    setIsActive(!isActive);
  };

  const handleLinkClick = () => {
    if (myElementRef.current) {
      myElementRef.checked = "false";
    }
    setIsActive(false);
  };

  return (
    <div className="navbar">
      <input
        type="checkbox"
        id="active"
        checked={isActive}
        onChange={handleCheckboxChange}
        ref={myElementRef}
      />
      <label htmlFor="active" className="menu-btn">
        <span></span>
      </label>
      <label htmlFor="active" className="close"></label>
      <div className="wrapper">
        <ul>
          <li>
            <a href="#home-nav" onClick={handleLinkClick}>
              {t("nav")}
            </a>
          </li>
          <li>
            <a href="#about-nav" onClick={handleLinkClick}>
              {t("nav1")}
            </a>
          </li>
          <li>
            <a href="#projects-nav" onClick={handleLinkClick}>
              {t("nav2")}
            </a>
          </li>
          <li>
            <a href="#education-nav" onClick={handleLinkClick}>
              {t("nav3")}
            </a>
          </li>
          <li>
            <a href="#awards-nav" onClick={handleLinkClick}>
              {t("nav4")}
            </a>
          </li>
          <li>
            <a href="#supervised-nav" onClick={handleLinkClick}>
              {t("nav5")}
            </a>
          </li>
          <li>
            <a href="#contact-nav" onClick={handleLinkClick}>
              {t("nav6")}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
