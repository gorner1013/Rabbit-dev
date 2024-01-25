import React from "react";
import "../../pages/Contact/ContactPage.css";
import * as Constant from '../../constants';
/* TypedJs */
import Typical from "react-typical";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

const Contact = () => (
  <section className="contactos" id="contactos">
    <h2 className="heading">
      <FormattedMessage id="contact" defaultMessage="Contact Me" />
    </h2>
    <h3 className="titulo" data-aos="fade-left" data-aos-delay="300">
      <FormattedMessage id="contact-info" defaultMessage="Contact me by: " />
      <Typical
        className="site-contacto"
        loop={Infinity}
        wrapper="b"
        steps={[
          "Gmail",
          500,
          "Skype",
          500,
          "Telegram",
          500,
          "Discord",
          500,
          "Github",
          500,
        ]}
      />
    </h3>

    <div className="icons">
      <a
        href={Constant.GMAIL_ADDRESS}
        target="_blank"
        rel="noopener noreferrer"
        data-aos="zoom-in"
      >
        <div className="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fab fas fa-envelope"></span>
        </div>
        <div className="text">Gmail</div>
      </a>
      <a
        href={Constant.SKYPE_ADDRESS}
        target="_blank"
        rel="noopener noreferrer"
        data-aos="zoom-in"
      >
        <div className="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fab fa-skype"></span>
        </div>
        <div className="text">Skype</div>
      </a>
      <a
        href={Constant.SLACK_ADDRESS}
        target="_blank"
        rel="noopener noreferrer"
        data-aos="zoom-in"
      >
        <div className="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fab fa-telegram"></span>
        </div>
        <div className="text">Telegram</div>
      </a>
      <a
        href={Constant.DISCORD_ADDRESS}
        target="_blank"
        rel="noopener noreferrer"
        data-aos="zoom-in"
      >
        <div className="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fab fa-discord"></span>
        </div>
        <div className="text">Discord</div>
      </a>
      <a
        href={Constant.GITHUB_ADDRESS}
        target="_blank"
        rel="noopener noreferrer"
        data-aos="zoom-in"
      >
        <div className="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fab fa-github-square"></span>
        </div>
        <div className="text">GitHub</div>
      </a>
    </div>
  </section>
);

export default React.memo(Contact);
