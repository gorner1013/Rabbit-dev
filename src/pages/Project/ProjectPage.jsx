import React, { useState } from 'react'
import './ProjectPage.css';

/* Modal */
import Modal from "./Modal";

/* React router */
import { NavLink } from 'react-router-dom';

/* Componet */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Img */
const proyectsImg = require.context('../../img', true);

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
            <FormattedMessage
              id='projects'
              defaultMessage='Projects'
            />
          </h1>
          <nav className="navbar nav-proj">
            <NavLink to="/project" offset={-150} duration={500}>
              <FormattedMessage
                id='site-web'
                defaultMessage='websites'
              />
            </NavLink>
            <NavLink to="/project/app" offset={-150} duration={500}>
              Apps
            </NavLink>
            <NavLink to="/project/design" offset={-150} duration={500}>
              <FormattedMessage
                  id='design'
                  defaultMessage='design'
              />
            </NavLink>
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
            <a href="https://timetile.store/" target="_blank">
              <img src={proyectsImg(`./pro_web/project1.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a href="https://coinzix.com/" target="_blank">
              <img src={proyectsImg(`./pro_web/project2.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a href="https://composable.finance/" target="_blank">
              <img src={proyectsImg(`./pro_web/project3.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a href="https://www.sedonatires.com/" target="_blank">
              <img src={proyectsImg(`./pro_web/project4.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a href="https://tesla.coinzix.com/" target="_blank">
              <img src={proyectsImg(`./pro_web/project5.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a href="https://eurekaa.io/" target="_blank">
              <img src={proyectsImg(`./pro_web/project6.png`)} className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a href="https://practithink.com/" target="_blank">
              <img src={proyectsImg(`./pro_web/project7.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a href="https://eatleftys.com/" target="_blank">
              <img src={proyectsImg(`./pro_web/project8.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a href="https://www.sowltoken.com/" target="_blank">
              <img src={proyectsImg(`./pro_web/project9.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a href="https://www.simpsonpropertygroup.com/" target="_blank">
              <img src={proyectsImg(`./pro_web/project10.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a href="https://veggiecraftfarms.com/" target="_blank">
              <img src={proyectsImg(`./pro_web/project11.png`)} alt="" className="projects__img" />
            </a>
          </div>
        </section>
      </main>

      <ScrollToTop />

      <Footer />
    </div>
  )
}
export default Project;