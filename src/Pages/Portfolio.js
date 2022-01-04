import React from "react";
import SectionHeading from "../Components/SectionHeading";
import Eshaafi_Portfolio_Img from "../Resources/Images/Homepage/Eshaafi_Portfolio_Img.png";
import PortfolioSection from "../Components/PortfolioSection";
import PortfolioTextSection from "../Components/PortfolioTextSection";
import Cuptie_portfolio_img from "../Resources/Images/Homepage/Cuptie_portfolio_img.png";

import Aurilian_portfolio_site from "../Resources/Images/Homepage/Aurilian_portfolio_site.png";
import Navbar from "../Components/Navbar";
import { Container, Row, Col } from "react-bootstrap";
function Portfolio() {
  return (
    <>
      <div className="HomePage-navbar-wrapper">
        <Navbar />
      </div>
      <div className="HomePage_wrapper">
        <div className="Page1">
          <SectionHeading title="Portfolio" />
        </div>
        <div className="Page1 Portfolio_Section">
          <PortfolioSection
            PortfolioImage={Eshaafi_Portfolio_Img}
            PortfolioText="eShaafi"
            SlideStart="1"
            SlideEnd="3"
            line="line-272"
          />
        </div>
        <div className="Page1">
          <PortfolioTextSection
            PortfolioName="eShaafi"
            PortfolioLine="care that never quits"
            PortfolioDesc="eShaafi.com is a telehealth company. The sincerest desire of eShaafi is to care for the patient and family to provide
                necessary healthcare services in the comfort of home. The
                company is providing online consultation of experts, fastest
                delivery of medicines, meticulous diagnostic, and rapid home
                nursing services. We are serving all your healthcare at one
                place."
            line="line-145"
            align="center"
            col="10"
            ImageSpacing="Potfolio_Img_Section"
            TagLineSpacing="Potfolio_PortFolioLine_Section"
          />
        </div>
        <div className="Page1 Portfolio_Section">
          <PortfolioSection
            PortfolioImage={Cuptie_portfolio_img}
            PortfolioText="Cuptie"
            SlideStart="2"
            SlideEnd="3"
            line="line-272"
          />
        </div>
        <div className="Page1">
          <PortfolioTextSection
            PortfolioName="Cuptie"
            PortfolioLine="creativity at its peak"
            PortfolioDesc="Cuptie aims to generate apps and games. It intends to create mobile apps and games that are AI-based, yet not boring and not complicated to use. Cuptie designs mobile gaming apps to promote edutainment, creativity and innovation."
            line="line-145"
            align="center"
            col="10"
            ImageSpacing="Potfolio_Img_Section"
            TagLineSpacing="Potfolio_PortFolioLine_Section"
          />
        </div>
        <div className="Page1 Portfolio_Section">
          <PortfolioSection
            PortfolioImage={Aurilian_portfolio_site}
            PortfolioText="Aurelian Origins"
            SlideStart="3"
            SlideEnd="3"
            line="line-180"
          />
        </div>
        <div className="Page1">
          <PortfolioTextSection
            PortfolioName="Aurelian
            Origins"
            PortfolioLine="releasing the untapped
            potential in games"
            PortfolioDesc="Cuptie aims to generate apps and games. It intends to create mobile apps and games that are AI-based, yet not boring and not complicated to use. Cuptie designs mobile gaming apps to promote edutainment, creativity and innovation."
            line="line-120"
            align="start"
            col="10"
            ImageSpacing="Potfolio_Img_Section_aurelian"
            TagLineSpacing="Potfolio_PortFolioLine_Section_Aurelian"
            mt="22px"
          />
          <div className="Footer Page2">
            <Container>
              <Row>
                <Col>
                  <div className="d-flex justify-content-between Footer_Heading_Wrapper">
                    <div>
                      <h5 className="size_24 line-36">Terafort</h5>
                    </div>
                    <div className="Horizontal_Line_Footer"></div>
                    <div>
                      <h5 className="size_24 line-36">contact@terafort.com</h5>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between Footer_Address">
                    <div className="col-md-3">
                      <h5 className="size_24 line-36 letter_0_5 text_black_666">
                        Terafort, Third Floor, The Plaza 100, MM Alam Road,
                        Lahore
                      </h5>
                    </div>
                    <div>
                      <h5 className="size_24 line-36 letter_0_5 text_black_666">
                        +92 301 1166 523
                      </h5>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
