import React, { useContext } from "react";
import "./Header.css";
/* ReactScroll */
import { Link } from "react-scroll";

/* React router */
import { NavLink } from "react-router-dom";

/* DarkMode */
import DarkMode from "../DarkMode/DarkMode";

/* Language */
import { FormattedMessage } from "react-intl";
import { langContext } from "../../context/Context";

const Header = () => {
  // Buttom language
  const idioma = useContext(langContext);
  // Menu desplegable
  const menuDesplegable = () => {
    let navbar = document.querySelector(".navbar");
    navbar.classList.toggle("activar");

    window.onscroll = () => {
      if (window.scrollY > 0) {
        document.querySelector(".site-header").classList.add("activar");
      } else document.querySelector(".site-header").classList.remove("activar");

      navbar.classList.remove("activar");
    };
  };

  return (
    <header className="site-header">
      <div
        id="menu-btn"
        className="fas fa-bars"
        onClick={menuDesplegable}
      ></div>

      <a href="/Kano-portfolio" className="logo">
        <span>Rabbit_dev</span>
      </a>

      <nav className="navbar">
        <Link to="inicio" spy={true} offset={-150} href="#inicio">
          <FormattedMessage id="home" defaultMessage="ホーム" />
        </Link>
        <Link to="sobre-mi" spy={true} offset={-150} href="#sobre-mi">
          <FormattedMessage id="about" defaultMessage="私について" />
        </Link>
        <Link to="servicios" spy={true} offset={-150} href="#servicios">
          <FormattedMessage id="services" defaultMessage="サービス内容" />
        </Link>
        <Link to="proyectos" spy={true} offset={-150} href="#proyectos">
          <FormattedMessage id="projects" defaultMessage="実績" />
        </Link>
        <Link to="contactos" spy={true} offset={-150} href="#contactos">
          <FormattedMessage id="contact" defaultMessage="お問い合わせ" />
        </Link>
        {/* <div id="buttons">
          <img
            onClick={() => idioma.selectLanguage("en-US")}
            src="https://nahuel61920.github.io/Portafoliovirtual/img/en.png"
            alt="EEUU"
          />
          <img
            onClick={() => idioma.selectLanguage("es-ES")}
            src="https://nahuel61920.github.io/Portafoliovirtual/img/es.png"
            alt="España"
          />
        </div> */}
      </nav>
      <div className="switch" id="switch">
        <DarkMode />
      </div>
    </header>
  );
};

export default React.memo(Header);
