import React from "react";
import infosis from "../images/infosis.jpg";
import { Image } from "antd";

const SupervisedPractice = ({ t }) => {
  return (
    <div div className="container-supervisedPractice" id="supervised-nav">
      <h2 className="title-container-pps">{t("pps")}</h2>
      <div className="supervised-practice">
        <div className="supervised-practice-content">
          <h2 className="supervised-practice-title">{t("pps1")}</h2>
          <h3 className="supervised-practice-subtitle">
            INFOSIS - MAR DEL PLATA
          </h3>
          <p className="supervised-practice-description">{t("pps2")}</p>
        </div>

        <div className="container-img-practice">
          <Image
            src={infosis}
            alt="Infosis - Mar del Plata"
            className="supervised-practice-image"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default SupervisedPractice;
