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

const ImageCarousel = () => {
  return (
    <div class="slider">
      <div class="slide-track">
        <div class="slide">
          <img className="img-carousel" src={java} />
        </div>
        <div class="slide">
          <img className="img-carousel" src={php} />
        </div>
        <div class="slide">
          <img className="img-carousel" src={laravel} />
        </div>
        <div class="slide">
          <img className="img-carousel" src={javascript} />
        </div>
        <div class="slide">
          <img className="img-carousel" src={c} />
        </div>

        <div class="slide">
          <img className="img-carousel" src={bootstrap} />
        </div>
        <div class="slide">
          <img className="img-carousel" src={antdesign} />
        </div>
        <div class="slide">
          <img className="img-carousel" src={html} />
        </div>
        <div class="slide">
          <img className="img-carousel" src={css} />
        </div>
        <div class="slide">
          <img className="img-carousel" src={mysql} />
        </div>
        <div class="slide">
          <img className="img-carousel" src={firebase} />
        </div>
        <div class="slide">
          <img className="img-carousel" src={git} />
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
