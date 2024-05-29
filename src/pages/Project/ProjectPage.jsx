import React, { useState } from "react";
import "./ProjectPage.css";

/* Modal */
import Modal from "./Modal";

/* React router */
import { NavLink } from "react-router-dom";

/* Componet */
import HeaderPage from "../../components/Header/HeaderPage";
import Footer from "../../components/Footer/Footer";
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

/* Img */
const proyectsImg = require.context("../../img", true);

const Project = () => {
  const [estadoModal17, cambiarEstadoModal17] = useState(false);
  const [estadoModal14, cambiarEstadoModal14] = useState(false);
  const [estadoModal15, cambiarEstadoModal15] = useState(false);
  const [estadoModal16, cambiarEstadoModal16] = useState(false);
  const [estadoModal13, cambiarEstadoModal13] = useState(false);
  const [estadoModal12, cambiarEstadoModal12] = useState(false);
  const [estadoModal11, cambiarEstadoModal11] = useState(false);
  const [estadoModal10, cambiarEstadoModal10] = useState(false);
  const [estadoModal9, cambiarEstadoModal9] = useState(false);
  const [estadoModal8, cambiarEstadoModal8] = useState(false);
  const [estadoModal7, cambiarEstadoModal7] = useState(false);

  return (
    <div>
      <HeaderPage />

      <ParticleBackground />

      <main>
        <section className="proyectos mas-proyect" id="proyectos">
          <h1 className="heading" data-section="Nav" data-value="projects">
            <FormattedMessage id="projects" defaultMessage="プロジェクト" />
          </h1>
          <nav className="navbar nav-proj">
            <NavLink to="/project" offset={-150} duration={500}>
              <FormattedMessage id="site-web" defaultMessage="ウェブとアプリ" />
            </NavLink>
            {/* <NavLink to="/project/app" offset={-150} duration={500}>
              アプリ
            </NavLink>
            <NavLink to="/project/design" offset={-150} duration={500}>
              <FormattedMessage id="design" defaultMessage="デザイン" />
            </NavLink> */}
            {/* <NavLink to="/project/game" offset={-150} duration={500}>
              <FormattedMessage
                id='games'
                defaultMessage='games'
              />
            </NavLink> */}
          </nav>
        </section>

        <section className="projects__grid paginas-web">
          <div className="projects__item">
            <a href="https://www.care-plus.jp/staff/" target="_blank">
              <img
                src={proyectsImg(`./pro_web/1-1.png`)}
                alt=""
                className="projects__img"
              />
            </a>
          </div>
          <div className="projects__item">
            <a href="https://d35v8eayqoikqx.cloudfront.net/index.html" target="_blank">
              <img
                src={proyectsImg(`./pro_web/2-2.png`)}
                alt=""
                className="projects__img"
              />
            </a>
          </div>
          <div className="projects__item">
            <a href="https://kirihare-web.web.app/" target="_blank">
              <img
                src={proyectsImg(`./pro_web/3-1.png`)}
                alt=""
                className="projects__img"
              />
            </a>
          </div>
          <div className="projects__item">
            <a href="https://sakura-a-h.com/" target="_blank">
              <img
                src={proyectsImg(`./pro_web/4-1.png`)}
                alt=""
                className="projects__img"
              />
            </a>
          </div>
          <div className="projects__item">
            
              <img
                src={proyectsImg(`./pro_web/5-1.png`)}
                alt=""
                className="projects__img"
              />
            
          </div>
          <div className="projects__item">
            <a href="https://eurekaa.io/" target="_blank">
              <img
                src={proyectsImg(`./pro_web/6-1.png`)}
                className="projects__img"
              />
            </a>
          </div>
          {/* <div className="projects__item">
            <a href="https://practithink.com/" target="_blank">
              <img
                src={proyectsImg(`./pro_web/project7.png`)}
                alt=""
                className="projects__img"
              />
            </a>
          </div> */}
          <div className="projects__item">
            <a href="https://www.simpsonpropertygroup.com/" target="_blank">
              <img
                src={proyectsImg(`./pro_web/project10.png`)}
                alt=""
                className="projects__img"
              />
            </a>
          </div>
          <div className="projects__item">
            <a href="https://eap.kirihare.jp/" target="_blank">
              <img
                src={proyectsImg(`./pro_web/7-1.png`)}
                alt=""
                className="projects__img"
              />
            </a>
          </div>
          {/* <div className="projects__item">
            <a href="https://www.sowltoken.com/" target="_blank">
              <img
                src={proyectsImg(`./pro_web/project9.png`)}
                alt=""
                className="projects__img"
              />
            </a>
          </div>
          <div className="projects__item">
            <a href="https://www.simpsonpropertygroup.com/" target="_blank">
              <img
                src={proyectsImg(`./pro_web/project10.png`)}
                alt=""
                className="projects__img"
              />
            </a>
          </div>
          <div className="projects__item">
            <a href="https://veggiecraftfarms.com/" target="_blank">
              <img
                src={proyectsImg(`./pro_web/project11.png`)}
                alt=""
                className="projects__img"
              />
            </a>
          </div> */}
        </section>
      </main>

      <ScrollToTop />

      <Footer />
    </div>
  );
};
export default Project;
