import React from "react";
import cv from "../cv/GonzaloHerreroCV.pdf";

const PdfDownload = () => {
  return (
    <a className="link-download" href={cv} download>
      <span>Download</span>
      <span>PDF</span>
    </a>
  );
};

export default PdfDownload;
