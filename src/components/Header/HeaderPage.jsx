import React, { useContext } from "react";
import "./Header.css";

/* React router */
import { NavLink } from "react-router-dom";

/* DarkMode */
import DarkMode from "../DarkMode/DarkMode";

/* Language */
import { FormattedMessage } from "react-intl";
import { langContext } from "../../context/Context";

const HeaderPage = () => {
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

      <NavLink className="logo" to="/">
        <p>
          <span>Rabbit_dev</span>
        </p>
      </NavLink>

      <nav className="navbar">
        <NavLink to="/" offset={-150} duration={500}>
          <FormattedMessage id="home" defaultMessage="ホーム" />
        </NavLink>
        <NavLink to="/about" offset={-150} duration={500}>
          <FormattedMessage id="about" defaultMessage="私について" />
        </NavLink>
        <NavLink to="/service" offset={-150} duration={500}>
          <FormattedMessage id="services" defaultMessage="サービス内容" />
        </NavLink>
        <NavLink to="/project" offset={-150} duration={500}>
          <FormattedMessage id="projects" defaultMessage="実績" />
        </NavLink>
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

export default React.memo(HeaderPage);
