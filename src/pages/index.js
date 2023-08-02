import * as React from "react";
import "antd/dist/antd.css";

import MainPage from "../components/MainPage";
import Nav from "../components/Nav";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import Education from "../components/Education";
import ImageCarousel from "../components/ImageCarousel ";
import Awards from "../components/Awards";
import Footer from "../components/Footer";
import SupervisedPractice from "../components/SupervisedPractice";
import WhatsApp from "../components/WhatsApp";
import ButtonUp from "../components/ButtonUp";
import { FcBriefcase } from "@react-icons/all-files/c/FcBriefcase";

const IndexPage = () => {
  return (
    <div className="container-home">
      <Nav />
      <WhatsApp />
      <MainPage />
      <AboutMe />
      <Experience />
      <Education />
      <ImageCarousel />
      <Awards />
      <SupervisedPractice />
      <ButtonUp />
      <Footer />
    </div>
  );
};

export default IndexPage;

export const Head = () => (
  <title>
    <FcBriefcase />
    Gonzalo Herrero Portfolio
  </title>
);
