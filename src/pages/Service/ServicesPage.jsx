import React from "react";
import "./ServicesPage.css";

/* Componet */
import HeaderPage from "../../components/Header/HeaderPage";
import Footer from "../../components/Footer/Footer";
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Accordion from "./Accordion";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

const Services = () => {
  return (
    <div>
      <HeaderPage />

      <ParticleBackground />

      <main className="service-page">
        <section className="servicios" id="servicios">
          <h2 className="heading">
            <FormattedMessage id="services" defaultMessage="私がやること？" />
          </h2>
          <div className="row">
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
            <div className="columns" data-aos="fade-up" data-aos-delay="300">
              <i className="fas fa-laptop"></i>
              <h3>
                <FormattedMessage
                  id="development"
                  defaultMessage="ウェブ開発"
                />
              </h3>
              <p>
                <FormattedMessage
                  id="development-info"
                  defaultMessage="お客様のニーズに合わせたプロフェッショナルな Web 開発サービス。視覚的に魅力的でユーザーフレンドリーな Web サイトを作成し、パフォーマンスを最適化し、シームレスな機能を保証します。 "
                />
              </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="400">
              <i className="fas fa-chart-line"></i>
              <h3>
                <FormattedMessage
                  id="marketing"
                  defaultMessage="ウェブマーケティング"
                />
              </h3>
              <p>
                <FormattedMessage
                  id="marketing-info"
                  defaultMessage="当社の Web マーケティング サービスで、オンライン プレゼンスの可能性を最大限に引き出しましょう。戦略的な SEO やターゲットを絞ったキャンペーンから魅力的なコンテンツの作成まで、トラフィックを促進し、コンバージョンを高め、デジタル環境におけるブランドの認知度を高めます。"
                />
              </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="500">
              <i className="fas fa-mobile"></i>
              <h3>
                <FormattedMessage
                  id="maintenance"
                  defaultMessage="アプリ開発"
                />
              </h3>
              <p>
                <FormattedMessage
                  id="maintenance-info"
                  defaultMessage="あなたのアイデアを革新的なモバイル アプリケーションに変換します。当社のアプリ開発サービスは、プラットフォーム間で直感的で機能豊富なソリューションを提供し、ユーザーを魅了し、ビジネスの成長を促進します。"
                />
              </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="600">
              <i className="fa fa-thumbs-up"></i>
              <h3>
                <FormattedMessage id="seod" defaultMessage="安全" />
              </h3>
              <p>
                <FormattedMessage
                  id="seo-infodd"
                  defaultMessage="当社の強力な Web セキュリティ サービスでオンライン資産を保護します。脆弱性を特定し、サイバー脅威から保護し、データのプライバシーを確​​保するための包括的なソリューションを提供します。デジタル プレゼンスの強化と安心の提供は当社にお任せください。"
                />
              </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="700">
              <i className="fas fa-wrench"></i>
              <h3>
                <FormattedMessage id="optimizationd" defaultMessage="サポート" />
              </h3>
              <p>
                <FormattedMessage
                  id="optimization-infod"
                  defaultMessage="弊社の包括的な Web サポート サービスにより、スムーズで手間のかからない Web サイト運用が実現します。定期的なメンテナンスからタイムリーな更新、信頼性の高いトラブルシューティングまで、弊社はお客様の Web サイトを完璧に稼働させ、お客様がコア ビジネスに集中できるようにします。"
                />
              </p>
            </div>
          </div>
        </section>

        {/* <section className="preguntas">
          <h2 className="heading">
            <FormattedMessage
              id="services-questions"
              defaultMessage="WEB DEVELOPMENT FAQS"
            />
          </h2>
          <div className="accordion-container">
            <Accordion
              title={
                <FormattedMessage
                  id="services-questions-2s"
                  defaultMessage="WHAT WILL BE REQUIRED FROM ME DURING THE DEVELOPMENT PROCESS?"
                />
              }
              content={
                <FormattedMessage
                  id="services-questions-p2s"
                  defaultMessage="If you want to create a website, it is important that you or your marketer are involved in the process of coordinating all stages, providing information, and giving prompt feedback."
                />
              }
              dataAos="fade-left"
              dataAosDelay="300"
            />

            <Accordion
              title={
                <FormattedMessage
                  id="services-questions-3s"
                  defaultMessage="HOW CAN I FIND OUT THE EXACT COST?"
                />
              }
              content={
                <FormattedMessage
                  id="services-questions-p3s"
                  defaultMessage="The sales department manager will give you the cost after communicating with you. Before preparing a commercial offer for you, they will conduct an interview, find out about your needs, and determine the tasks that the project should solve.

                  You will receive the final proposal with the specified cost and website development timeframe within 2-5 business days."
                />
              }
              dataAos="fade-right"
              dataAosDelay="300"
            />

            <Accordion
              title={
                <FormattedMessage
                  id="services-questions-4s"
                  defaultMessage="ON WHICH CMS DO YOU DEVELOP WEBSITES?"
                />
              }
              content={
                <FormattedMessage
                  id="services-questions-p4s"
                  defaultMessage="Work with CMS: WordPress, Magento, Opencart, Bitrix, Joomla, Lavalite, Custom CMS, Frameworks and Builders like Wix, Squarespace and etc."
                />
              }
              dataAos="fade-left"
              dataAosDelay="300"
            />

            <Accordion
              title={
                <FormattedMessage
                  id="services-questions-4s"
                  defaultMessage="HOW MUCH DOES ONGOING SUPPORT COST?"
                />
              }
              content={
                <FormattedMessage
                  id="services-questions-p4s"
                  defaultMessage="Web development support 25€ per hour"
                />
              }
              dataAos="fade-left"
              dataAosDelay="300"
            />

            <Accordion
              title={
                <FormattedMessage
                  id="services-questions-4s"
                  defaultMessage="DO YOU PROVIDE SEO PROMOTION AND ADVERTISING SERVICES?"
                />
              }
              content={
                <FormattedMessage
                  id="services-questions-p4s"
                  defaultMessage="Yes, that’s one of our specialties. After development, we can take care of comprehensive website promotion. We can create a marketing strategy and launch lead generation through the most effective channels for your business, such as SEO, contextual advertising, and content marketing."
                />
              }
              dataAos="fade-left"
              dataAosDelay="300"
            />

            
          </div>
        </section> */}
      </main>

      <ScrollToTop />

      <Footer />
    </div>
  );
};
export default Services;
