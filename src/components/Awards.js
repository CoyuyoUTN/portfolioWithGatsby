import React from "react";
import { Image } from "antd";
import scrum from "../images/scrum.jpg";
import udemy from "../images/udemy.jpg";

const Awards = () => {
  return (
    <div className="awards-certification-container" id="awards-nav">
      <h2>-Awards and Certification-</h2>
      <div className="awards-links">
        <div className="award-item">
          <Image width={200} src={scrum} />
          <a href="https://www.scrumstudy.com/certification/verify?type=SFC&number=871388">
            <h3>Certificate in the foundations of Scrum</h3>
          </a>
        </div>
        <div className="award-item">
          <Image width={200} src={udemy} />

          <a href="https://www.udemy.com/certificate/UC-54361bb5-6f43-41b6-8bbe-4942c57d2117/">
            {" "}
            <h3>Introduction to programming with javascript</h3>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Awards;
