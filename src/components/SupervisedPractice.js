import React from "react";
import infosis from "../images/infosis.jpg";
import { Image } from "antd";

const SupervisedPractice = () => {
  return (
    <div div className="container-supervisedPractice">
      <h2 className="title-container-pps">-Profesional experience-</h2>
      <div className="supervised-practice">
        <div className="supervised-practice-content">
          <h2 className="supervised-practice-title">
            SUPERVISED PROFESSIONAL PRACTICE (SPP)
          </h2>
          <h3 className="supervised-practice-subtitle">
            INFOSIS - MAR DEL PLATA
          </h3>
          <p className="supervised-practice-description">
            Realization of a supervised professional practice (SPP) in the
            company Infosis - Mar del Plata 200Hs duration. I was trained on
            agile methodologies, the management of the infrastructure,
            automation, database, testing (QA) and especially the development
            area where we work with Java using Maven and Vaadin. Also the work
            using Jira for the management of incidents and git/gitlab.
          </p>
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
