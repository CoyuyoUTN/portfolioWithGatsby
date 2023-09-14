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
import { useTranslation } from "react-i18next";
import { Suspense } from "react";

const IndexPage = () => {
  const { t, i18n } = useTranslation(["aboutme"]);
  const changeLenguageEsp = () => {
    i18n.changeLanguage("es");
  };
  const changeLenguageEng = () => {
    i18n.changeLanguage("en");
  };
  return (
    <>
      <Suspense fallback="Loading translate">
        <div className="container-home">
          <button onClick={changeLenguageEsp}> Cambiar al español</button>
          <button onClick={changeLenguageEng}> Cambiar al ingles</button>

          <Nav t={t} />
          <WhatsApp />
          <MainPage t={t} />
          <AboutMe t={t} />
          <Experience t={t} />
          <Education t={t} />
          <BannerMove />
          <Awards t={t} />
          <SupervisedPractice t={t} />
          <ButtonUp t={t} />
          <Footer t={t} />
        </div>
      </Suspense>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Gonzalo Herrero Portfolio</title>;
