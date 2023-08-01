import React from "react";
import PdfDownload from "./PdfDownload";
import ModalForm from "./Modalform";

const Footer = () => {
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
          <span>Download cv</span>
          <PdfDownload />
        </div>
        <div className="footer-modal-container ">
          <ModalForm />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
