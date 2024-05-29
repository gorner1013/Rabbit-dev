import React from "react";
import "../../pages/Service/ServicesPage.css";
import { Link } from "react-router-dom";
import { ButtomGet } from "../ButtomGet/ButtomGet";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

const Service = () => (
  <section className="servicios" id="servicios">
    <h2 className="heading">
      <FormattedMessage id="services" defaultMessage="私がやること？" />
    </h2>
    <div className="row service_section">
      <div className="columns" data-aos="fade-up" data-aos-delay="300">
        <i className="fas fa-laptop"></i>
        <h3>
          <FormattedMessage id="development" defaultMessage="Web開発" />
        </h3>
        <p>
          <FormattedMessage
            id="development-info"
            defaultMessage="適切に構成された Web ページ、優れたレスポンシブ デザイン、魅力的なカラー パレット、Web サイトを閲覧する際にユーザーに満足感を与えるインタラクションの作成。"
          />
        </p>
      </div>
      <div className="columns" data-aos="fade-up" data-aos-delay="300">
        <i className="fas fa-mobile-alt"></i>
        <h3>
          <FormattedMessage
            id="developments"
            defaultMessage="モバイルアプリ開発"
          />
        </h3>
        <p>
          <FormattedMessage
            id="development-infos"
            defaultMessage="モバイル/デスクトップ アプリ開発の専門知識を活かして、Android/iOS および Windows/Linux/MacOS に特化した高性能のモバイル/デスクトップ アプリケーションを構築できます。アプリはオペレーティング システムの潜在能力を最大限に活用し、最適なパフォーマンスと信頼性を実現します。"
          />
        </p>
      </div>
      <div className="columns" data-aos="fade-up" data-aos-delay="200">
        <i className="fas fa-drafting-compass"></i>
        <h3>
          <FormattedMessage id="design" defaultMessage="デザイン" />
        </h3>
        <p>
          <FormattedMessage
            id="design-info"
            defaultMessage="ユーザーを魅了し、ブランドの本質を反映する素晴らしいデザインを作成します。アイデアを視覚的に魅力的でユーザーフレンドリーなデザインに変換します。オンラインでの存在感を高めましょう。"
          />
        </p>
      </div>
    </div>
    <div className="portafolio-btn">
      <Link to="/service">
        <ButtomGet />
      </Link>
    </div>
  </section>
);

export default React.memo(Service);
