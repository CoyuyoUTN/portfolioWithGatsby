import React from "react";
import java from "../images/Java-Logo.png";
import php from "../images/php.png";
import laravel from "../images/Laravel.jpg";
import bootstrap from "../images/bootstrap-Logo.png";
import antdesign from "../images/antdesign.png";
import javascript from "../images/javascript.png";
import html from "../images/html.png";
import css from "../images/css.avif";
import c from "../images/c.jpg";
import mysql from "../images/mysql.jpg";
import firebase from "../images/Firebase_Logo.png";
import reactimg from "../images/react.jpg";
import git from "../images/github.jpeg";

const BannerMove = ({ t }) => {
  return (
    <div>
      <h2 className="skills">{t("skills")}</h2>
      <div className="skills-container ">
        <img src={c} height="70" width="130px" />
        <img src={java} height="70" width="130px" />
        <img src={php} height="70" width="130px" />
        <img src={laravel} height="70" width="180px" />
        <img src={bootstrap} height="70" width="130px" />
        <img src={antdesign} height="70" width="120px" />
        <img src={javascript} height="70" width="130px" />
        <img src={reactimg} height="70" width="180px" />
        <img src={html} height="70" width="130px" />
        <img src={css} height="70" width="130px" />
        <img src={mysql} height="70" width="130px" />
        <img src={firebase} height="70" width="130px" />
        <img src={git} height="70" width="180px" />
      </div>
    </div>
  );
};

export default BannerMove;
