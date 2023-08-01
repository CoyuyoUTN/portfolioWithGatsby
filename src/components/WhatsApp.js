import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const WhatsApp = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5492235044992"
      id="whatsapp"
      target="_blank"
      rel="noreferrer"
    >
      <BsWhatsapp id="whatsapp-icon" />
    </a>
  );
};

export default WhatsApp;
