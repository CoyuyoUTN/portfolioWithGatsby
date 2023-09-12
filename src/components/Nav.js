import React from "react";

const Nav = () => {
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
            <a href="#home-nav">Home</a>
          </li>
          <li>
            <a href="#about-nav">About_Me</a>
          </li>
          <li>
            <a href="#projects-nav">Projects</a>
          </li>
          <li>
            <a href="#education-nav">Education</a>
          </li>
          <li>
            <a href="#awards-nav">Awards</a>
          </li>
          <li>
            <a href="#supervised-nav">Experience</a>
          </li>
          <li>
            <a href="#contact-nav">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
