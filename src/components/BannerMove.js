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
import git from "../images/github.jpeg";

const BannerMove = () => {
  return (
    <marquee
      scrolldelay="1"
      scrollamount="30"
      direction="left"
      loop="infinite"
      onmouseout="this.start()"
      onmouseover="this.stop()"
      class="marquee"
    >
      <img src={c} height="150px" width="180px" />
      <img src={java} height="150px" width="180px" />
      <img src={php} height="150px" width="180px" />
      <img src={laravel} height="150px" width="180px" />
      <img src={bootstrap} height="150px" width="180px" />
      <img src={antdesign} height="150px" width="180px" />
      <img src={javascript} height="150px" width="180px" />
      <img src={html} height="150px" width="180px" />
      <img src={css} height="150px" width="180px" />
      <img src={mysql} height="150px" width="180px" />
      <img src={firebase} height="150px" width="180px" />
      <img src={git} height="150px" width="180px" />
    </marquee>
  );
};

export default BannerMove;
