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

const IndexPage = () => {
  return (
    <div className="container-home">
      <Nav />
      <MainPage />
      <AboutMe />
      <Experience />
      <Education />
      <ImageCarousel />
      <Awards />
      <SupervisedPractice />
      <Footer />
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
