import React from "react";

const MainPage = ({ t }) => {
  return (
    <div className="main-page home-title" id="home-nav">
      <span>{t("presentationp1")}</span>
      <span>{t("presentationp2")}</span>
      <span>{t("presentationp3")}</span>
    </div>
  );
};

export default MainPage;
