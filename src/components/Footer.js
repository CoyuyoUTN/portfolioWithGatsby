import React from "react";
import ModalForm from "./ModalForm";
import cv from "../cv/GonzaloHerreroCV.pdf";

const Footer = ({ t }) => {
  return (
    <footer className="footer" id="contact-nav">
      <div id="social-platforms">
        <a
          class="btn btn-icon btn-facebook"
          href="https://github.com/CoyuyoUTN"
        >
          <i class="fa fa-github"></i>
          <span>GitHub</span>
        </a>
        <a class="btn btn-icon btn-googleplus" href="#">
          <i class="fa fa-google-plus"></i>
          <span>Google+</span>
        </a>
        <a
          class="btn btn-icon btn-linkedin"
          href="https://www.linkedin.com/in/herrerogonzalo/"
        >
          <i class="fa fa-linkedin"></i>
          <span>LinkedIn</span>
        </a>
      </div>
      <div className="download-contact-container">
        <div className="download-container">
          <a className="link-download" href={cv} download>
            <button class="cssbuttons-io-button">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z"
                  fill="currentColor"
                ></path>
              </svg>
              <span>{t("footer1")}</span>
            </button>
          </a>
        </div>
        <div className="footer-modal-container ">
          <ModalForm t={t} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
