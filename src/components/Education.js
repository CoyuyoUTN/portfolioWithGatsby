import React from "react";
import { Image } from "antd";
import avalithImg1 from "../images/skillfactoryReact.jpg";
import avalithImg2 from "../images/ceritifcado-avalith-workshop.png";
import utnTituloImg from "../images/titulo.jpg";

const Education = () => {
  return (
    <div className="education-container">
      <h1 className="education">Education</h1>
      <div className="utn-container">
        <h2 className="title-education">UTN</h2>
        <p>
          <strong>University Degree in Technical Programming</strong>
        </p>
        <div className="img-titleutn">
          {" "}
          <Image
            src={utnTituloImg}
            width={150}
            alt="UTN - Mar del Plata"
          ></Image>
        </div>
      </div>
      <div className="avalith-container">
        <h2 className="title-education">Avalith</h2>
        <p>
          <strong>React.js developer</strong>
        </p>
        <div className="avalith-images">
          <Image.PreviewGroup
            preview={{
              onChange: (current, prev) =>
                console.log(`current index: ${current}, prev index: ${prev}`),
            }}
          >
            <Image width={150} src={avalithImg1} />
            <Image width={150} src={avalithImg2} />
          </Image.PreviewGroup>
        </div>
      </div>
    </div>
  );
};

export default Education;
