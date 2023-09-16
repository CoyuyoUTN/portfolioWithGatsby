import * as React from "react";
import "antd/dist/antd.css";

import MainPage from "../components/MainPage";
import Nav from "../components/Nav";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Awards from "../components/Awards";
import Footer from "../components/Footer";
import SupervisedPractice from "../components/SupervisedPractice";
import WhatsApp from "../components/WhatsApp";
import ButtonUp from "../components/ButtonUp";
import BannerMove from "../components/BannerMove";

import "../config/i18next.config";
import { I18nextProvider, useTranslation } from "react-i18next";

const IndexPage = () => {
  const [t, i18n] = useTranslation(["global"]);

  const changeLenguageEsp = () => {
    i18n.changeLanguage("es");
  };
  const changeLenguageEng = () => {
    i18n.changeLanguage("en");
  };
  return (
    <>
      <I18nextProvider>
        <div className="container-home">
          <button className="btn-translate-es" onClick={changeLenguageEsp}>
            es
          </button>
          <button className="btn-translate-en" onClick={changeLenguageEng}>
            en
          </button>

          <Nav t={t} />
          <WhatsApp />
          <MainPage t={t} />
          <AboutMe t={t} />
          <Experience t={t} />
          <BannerMove t={t} />
          <Education t={t} />
          <Awards t={t} />
          <SupervisedPractice t={t} />
          <ButtonUp t={t} />
          <Footer t={t} />
        </div>
      </I18nextProvider>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Gonzalo Herrero Portfolio</title>;
