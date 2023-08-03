import React from "react";
import videoJava from "../videos/javaproject.mp4";
import videoNotes from "../videos/notes.mp4";
import randm from "../videos/RickAndMortyCards.mp4";
import ecommerce from "../videos/ecommerce.mp4";
import flete from "../videos/minifletes.mp4";
import laundry from "../videos/LavaderoAgüitas.mp4";
import library from "../videos/library.mp4";
import { FaJava } from "@react-icons/all-files/fa/FaJava";
import { FaPhp } from "@react-icons/all-files/fa/FaPhp";
import { FaReact } from "@react-icons/all-files/fa/FaReact";
import { SiGithub } from "@react-icons/all-files/si/SiGithub";
import { SiNetlify } from "@react-icons/all-files/si/SiNetlify";

const Experience = () => {
  return (
    <div class="container" id="projects-nav">
      <div>
        <h1>Projects</h1>
        <div class="boxes">
          <div class="box">
            <p class="icon">
              Java <FaJava />
            </p>
            <h2>UTN</h2>
            <p class="piece-count">
              This project is dedicated to managing a store, involving data
              entry using binary files and JSON for tracking merchandise,
              customers, and their respective billing methods. The team utilized
              GitHub to enhance collaboration and performance. The code was
              developed in Java with a focus on creating clean and scalable
              solutions. Regular review, updates, refactoring, and code
              optimization were carried out to ensure its quality. Additionally,
              JSON was employed for efficient data migration.
            </p>
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
            <p class="piece-count">
              This project aims to create a social network specifically for UTN
              students in Mar del Plata, Argentina, to facilitate their first
              work experiences. It utilizes the MVC framework for efficient
              controller-view management. The layout is constructed using HTML,
              CSS, Bootstrap, and Javascript. Data persistence is achieved
              through a MySQL database. An external API is integrated to gather
              UTN student data. Additionally, GitHub is employed to enhance
              teamwork and overall project performance.
            </p>
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
            <p class="piece-count">
              This project focuses on developing a task management application
              that allows users to keep track of their notes. It utilizes CRUD
              operations and leverages Redux Toolkit for efficient task
              management. The application incorporates various libraries for
              program design and animations, enhancing its overall functionality
              and user experience.
            </p>
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
            <p class="piece-count">
              This project is dedicated to data sampling by consuming APIs. It
              utilizes Axios for API consumption, allowing seamless data
              retrieval. The data is displayed using Bootstrap, utilizing tables
              and cards with pagination for a user-friendly interface. React
              Router is used for efficient data management through components,
              enabling smooth navigation and interaction with the data.
            </p>
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
            <p class="piece-count">
              This project focuses on implementing an e-commerce platform. It
              involves utilizing Axios for API consumption, enabling seamless
              integration of external data. The data is presented using
              Bootstrap and Ant Design, leveraging tables and cards with
              pagination for effective data representation. React Router is
              utilized for efficient data management through components,
              ensuring smooth navigation within the application. Additionally,
              the project incorporates the React Toolkit and useContext tools
              for effective information management within the program.
            </p>
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
            <p class="piece-count">
              This project aims to create a web page for a laundry service. The
              development process follows the agile methodology of Kanban,
              including client meetings to ensure the project's accurate
              assembly. Bootstrap and Ant Design are utilized for the page's
              design and layout. React Router Dom is implemented for efficient
              page routing within the application. GitHub is used for proper
              project control, facilitating version control and collaboration.
              Additionally, pure CSS and an animation library are employed to
              give style and visual appeal to the web page.
            </p>
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
            <p class="piece-count">
              This project focuses on creating a web page for a freight service.
              The website is built using the Gatsby framework, ensuring
              efficient and optimized performance. The agile methodology of
              Kanban is employed, including client meetings to ensure accurate
              project assembly and meet requirements. React-bootstrap is
              utilized for designing and styling the web page, providing a
              responsive and visually appealing interface. GitHub is used for
              proper project control, version management, and collaboration
              among team members. Pure CSS and an animation library are employed
              to enhance the page's style and incorporate engaging animations
              for a more interactive user experience.
            </p>
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
            <p class="piece-count">
              This React project features a CRUD system for products, accessible
              exclusively to administrators through secure login functionality.
              Redux Toolkit is employed for state management, while Bootstrap
              and Ant Design provide a polished user interface. React Router DOM
              ensures smooth navigation throughout the application, allowing
              authorized administrators to perform essential Create, Read,
              Update, and Delete operations on products with confidence.
            </p>
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
      </div>
    </div>
  );
};

export default Experience;
