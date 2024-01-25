import React from "react";
import "./Content.css";
import * as Constant from '../../constants';
import ParticleHeaderBg from "../ParticlesBg/ParticlesHeader/ParticleHeaderBg";

/* ReactScroll */
import { Link } from "react-scroll";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

const Content = () => (
  <div className="contenido">
    {/* <ParticleHeaderBg /> */}
    <section className="inicio" id="inicio">
      <div className="titulo">
        <h1 data-aos="fade-up" data-aos-delay="500">
          <FormattedMessage id="namess" defaultMessage="Web & Mobile Development | UI & UX Design" />
        </h1>
        <p className="h_intro">With my journey commencing in 2017, I have established me as an expert in Web & App Development, Web Marketing, and Design.</p>

        <div className="wrapper">
          <a
            className="button"
            href={Constant.SKYPE_ADDRESS}
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1200"
          >
            <div className="icon">
              <i className="fab fa-skype"></i>
            </div>
            <span>Skype</span>
          </a>
          <a
            className="button"
            href={Constant.SLACK_ADDRESS}
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1400"
          >
            <div className="icon">
              <i className="fab fa-telegram"></i>
            </div>
            <span>Telegram</span>
          </a>
          <a
            className="button"
            href={Constant.DISCORD_ADDRESS}
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1400"
          >
            <div className="icon">
              <i className="fab fa-discord"></i>
            </div>
            <span>Discord</span>
          </a>
          <a
            className="button"
            href={Constant.GITHUB_ADDRESS}
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1400"
          >
            <div className="icon">
              <i className="fab fa-github"></i>
            </div>
            <span>Github</span>
          </a>
        </div>

        <Link to="sobre-mi" href="#sobre-mi">
          <div className="scroll-down"></div>
        </Link>
      </div>
    </section>
  </div>
);

export default Content;
