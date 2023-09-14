import React from "react";

const Nav = ({ t }) => {
  // Selecciona todos los enlaces que deben cerrar el navbar
  const navLinks = document.querySelectorAll(".navbar a");

  // Agrega un evento de clic a cada enlace
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // Desactiva la casilla de verificación del menú
      const checkbox = document.getElementById("active");
      checkbox.checked = false;
    });
  });
  return (
    <div className="navbar">
      <input type="checkbox" id="active" />
      <label for="active" class="menu-btn">
        <span></span>
      </label>
      <label for="active" class="close"></label>
      <div class="wrapper">
        <ul>
          <li>
            <a href="#home-nav">{t("nav")}</a>
          </li>
          <li>
            <a href="#about-nav">{t("nav1")}</a>
          </li>
          <li>
            <a href="#projects-nav">{t("nav2")}</a>
          </li>
          <li>
            <a href="#education-nav">{t("nav3")}</a>
          </li>
          <li>
            <a href="#awards-nav">{t("nav4")}</a>
          </li>
          <li>
            <a href="#supervised-nav">{t("nav5")}</a>
          </li>
          <li>
            <a href="#contact-nav">{t("nav6")}</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
