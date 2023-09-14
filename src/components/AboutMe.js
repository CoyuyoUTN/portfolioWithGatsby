import React from "react";

const AboutMe = ({ t }) => {
  return (
    <div className="container-aboutme" id="about-nav">
      {" "}
      <div className="about-me ">{t("aboutme")}</div>
    </div>
  );
};

export default AboutMe;
