import React from "react";
import videoJava from "../videos/javaproject.mp4";
import videoNotes from "../videos/notes.mp4";
import randm from "../videos/RickAndMortyCards.mp4";
import ecommerce from "../videos/ecommerce.mp4";
import flete from "../videos/minifletes.mp4";
import laundry from "../videos/LavaderoAgüitas.mp4";
import CRUDLaravel from "../videos/CRUD laravel 10.mp4";
import library from "../videos/library.mp4";
import { FaJava } from "@react-icons/all-files/fa/FaJava";
import { FaPhp } from "@react-icons/all-files/fa/FaPhp";
import { FaReact } from "@react-icons/all-files/fa/FaReact";
import { SiGithub } from "@react-icons/all-files/si/SiGithub";
import { SiNetlify } from "@react-icons/all-files/si/SiNetlify";
import { FaLaravel } from "@react-icons/all-files/fa/FaLaravel";

const Experience = ({ t }) => {
  return (
    <div class="container" id="projects-nav">
      <div>
        <h1 className="title-section">{t("projects1")}</h1>
        <div class="boxes">
          <div class="box">
            <p class="icon">
              Java <FaJava />
            </p>
            <h2>UTN</h2>
            <p class="piece-count">{t("projects2")}</p>
            <div class="video-container">
              <video width="420" height="340" controls autoplay muted>
                <source src={videoJava} type="video/mp4" />
              </video>
            </div>
            <p class="icon">
              <a href="https://github.com/CoyuyoUTN/TpLab2021">
                {" "}
                <SiGithub /> Github
              </a>
            </p>
          </div>
          <div class="box">
            <p class="icon">
              Php <FaPhp />{" "}
            </p>
            <h2>UTN</h2>
            <p class="piece-count">{t("projects3")}</p>
            <p class="icon">
              <a href="https://github.com/CoyuyoUTN/TP-Labo4">
                {" "}
                <SiGithub /> Github
              </a>
            </p>
          </div>
        </div>
        <div class="boxes">
          <div class="box">
            <p class="icon">
              React <FaReact />
            </p>
            <h2>Avalith SkillFactory</h2>
            <p class="piece-count">{t("projects4")}</p>
            <div class="video-container">
              <video width="420" height="340" controls autoplay muted>
                <source src={videoNotes} type="video/mp4" />
              </video>
            </div>
            <p class="icon">
              <a href="https://github.com/CoyuyoUTN/App-notes-React">
                {" "}
                <SiGithub /> Github
              </a>
            </p>
            <a
              className="a-link-deploy"
              href="https://coyuyoutn.github.io/React-with-redux-taskNotes/"
            >
              <SiNetlify /> Deploy
            </a>
          </div>
          <div class="box">
            <p class="icon">
              React <FaReact />
            </p>
            <h2>Avalith SkillFactory</h2>
            <p class="piece-count">{t("projects5")}</p>
            <div class="video-container">
              <video width="420" height="340" controls autoplay muted>
                <source src={randm} type="video/mp4" />
              </video>
            </div>
            <p class="icon">
              <a href="https://github.com/CoyuyoUTN/React-Project-with-Apis">
                {" "}
                <SiGithub /> Github
              </a>
            </p>
            <a
              className="a-link-deploy"
              href="https://coyuyoutn.github.io/React-Project-with-Apis/"
            >
              <SiNetlify /> Deploy
            </a>
          </div>
          <div class="box">
            <p class="icon">
              React <FaReact />
            </p>
            <h2>Avalith SkillFactory</h2>
            <p class="piece-count">{t("projects6")}</p>
            <div class="video-container">
              <video width="420" height="340" controls autoplay muted>
                <source src={ecommerce} type="video/mp4" />
              </video>
            </div>
            <p class="icon">
              <a href="https://github.com/CoyuyoUTN/NewEcommerce">
                {" "}
                <SiGithub /> Github
              </a>
            </p>
            <a
              className="a-link-deploy"
              href=" https://ecommerce-app-skill-factory.vercel.app/"
            >
              <SiNetlify /> Deploy
            </a>
          </div>
          <div class="box">
            <p class="icon">
              {" "}
              React <FaReact />
            </p>
            <h2>Freelancer</h2>
            <p class="piece-count">{t("projects7")}</p>
            <div class="video-container">
              <video width="420" height="340" controls autoplay muted>
                <source src={laundry} type="video/mp4" />
              </video>
            </div>
            <p class="icon">
              <a href="https://github.com/CoyuyoUTN/laundry-page">
                {" "}
                <SiGithub /> Github
              </a>
            </p>
            <a
              className="a-link-deploy"
              href=" https://lavadero-aguitas.netlify.app/"
            >
              <SiNetlify /> Deploy
            </a>
          </div>
        </div>
        <div class="boxes">
          <div class="box">
            <p class="icon">
              React <FaReact />
            </p>
            <h2>Freelancer</h2>
            <p class="piece-count">{t("projects8")}</p>
            <div class="video-container">
              <video width="420" height="340" controls autoplay muted>
                <source src={flete} type="video/mp4" />
              </video>
            </div>
            <p class="icon">
              <a href="https://github.com/CoyuyoUTN/flete-website">
                {" "}
                <SiGithub /> Github
              </a>
            </p>
            <a
              className="a-link-deploy"
              href=" https://minifletes-tioyuyo.netlify.app/"
            >
              <SiNetlify /> Deploy
            </a>
          </div>
          <div class="box">
            <p class="icon">
              React <FaReact />
            </p>
            <h2>Avalith SkillFactory</h2>
            <p class="piece-count">{t("projects9")}</p>
            <div class="video-container">
              <video width="420" height="340" controls autoplay muted>
                <source src={library} type="video/mp4" />
              </video>
            </div>
            <p class="icon">
              <a href="https://github.com/CoyuyoUTN/Library--admin-with-react">
                {" "}
                <SiGithub /> Github
              </a>
            </p>
            <a
              className="a-link-deploy"
              href=" https://library-react-avalith.netlify.app/"
            >
              <SiNetlify /> Deploy
            </a>
          </div>
        </div>
        <div class="boxes">
          <div class="box">
            <p class="icon">
              Laravel <FaLaravel />
            </p>
            <h2>{t("projects11")}</h2>
            <p class="piece-count">{t("projects10")}</p>
            <div class="video-container">
              <video width="420" height="340" controls autoplay muted>
                <source src={CRUDLaravel} type="video/mp4" />
              </video>
            </div>
            <p class="icon">
              <a href="https://github.com/CoyuyoUTN/CRUD-Laravel">
                {" "}
                <SiGithub /> Github
              </a>
            </p>
          </div>
          <div class="box"></div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
