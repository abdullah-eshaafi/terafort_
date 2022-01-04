import React from "react";
//HomePage CSS
import "./HomePage.css";
import { Container, Row, Col } from "react-bootstrap";

//HomePage Video and Images
import HomePage_video from "../Resources/Images/Homepage/Homepage_video.mp4";
import Navbar from "../Components/Navbar";
import HomePage_uparrow from "../Resources/Images/Homepage/HomePage_uparrow.svg";
import HomePage_upsmile from "../Resources/Images/Homepage/HomePage_upsmile.svg";
import HomePage_Right_Arrow from "../Resources/Images/Homepage/HomePage_Right_Arrow.svg";

import Vision_Line_HomePage from "../Resources/Images/Homepage/Vision_Line_HomePage.svg";

import HomePage_Left_Arrow from "../Resources/Images/Homepage/HomePage_Left_Arrow.svg";

import Eshaafi_Portfolio_Img from "../Resources/Images/Homepage/Eshaafi_Portfolio_Img.png";
import Cuptie_portfolio_img from "../Resources/Images/Homepage/Cuptie_portfolio_img.png";

import Aurilian_portfolio_site from "../Resources/Images/Homepage/Aurilian_portfolio_site.png";

import careers_arrow from "../Resources/Images/Homepage/careers_arrow.svg";
//ReuseAble Components
import Section from "../Components/HeroSection";
import PortfolioSection from "../Components/PortfolioSection";
import PortfolioTextSection from "../Components/PortfolioTextSection";

function HomePage() {
  return (
    <>
      <div className="HomePage-navbar-wrapper">
        <Navbar />
      </div>
      <div className="HomePage_wrapper">
        <div className="Page1">
          <video autoPlay muted id="Homepage_video">
            <source src={HomePage_video} type="video/mp4" />
          </video>
          <div className="HomePage_animated_text_wrapper">
            <div>
              <div className="homePagePic">
                <img
                  src={HomePage_uparrow}
                  alt="..."
                  className="hompage_uparrow_img"
                />
              </div>
              <div className="homepage_guide_text">
                <h1 className="size_80 letter-1_5 text_black ">
                  Guided by passion.
                </h1>
              </div>
              <div className="hompage_upsmile_pic text-center">
                <img
                  src={HomePage_upsmile}
                  alt="..."
                  className="hompage_upsmile_img"
                />
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="Page1 who_we_are_section">
          <Section
            BgHeading="Who We Are"
            MainText="Providing solutions through technology, with the goal of promoting
              edutainment, creativity and innovation on a global scale"
            LinkText="About Us"
            HomePage_Right_Arrow={HomePage_Right_Arrow}
            BgHeadingClass="text_black_rgba"
            marginTop="0px"
          />
        </div>
        <div className="Page1 Vision_Section">
          <Section
            BgHeading="Vision"
            MainText="Providing solutions through technology, with the goal of promoting
              edutainment, creativity and innovation on a global scale"
            LinkText=""
            BgHeadingClass="text_white"
            marginTop="0px"
          />
        </div>
        <div className="Page1 Mission_Section">
          <div>
            <Section
              BgHeading="Mission"
              MainText="To create a comprehensive health care system that serves to the health of all"
              LinkText=""
              BgHeadingClass="text_white"
              marginTop="22px"
              Vision_Line_HomePage={Vision_Line_HomePage}
              Mission_right_arrow={HomePage_Right_Arrow}
              HomePage_Left_Arrow={HomePage_Left_Arrow}
            />
          </div>
        </div>
        <div className="Page1 Portfolio_Section">
          <div>
            <PortfolioSection
              PortfolioImage={Eshaafi_Portfolio_Img}
              PortfolioText="eShaafi"
              SlideStart="1"
              SlideEnd="3"
              line="line-272"
            />
          </div>
        </div>
        <div className="Page1 Portfolio_text_Section">
          <Container>
            <Row>
              <Col>
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
              </Col>
            </Row>
          </Container>
        </div>
        <div className="Page1 Portfolio_Section">
          <div>
            <PortfolioSection
              PortfolioImage={Cuptie_portfolio_img}
              PortfolioText="Cuptie"
              SlideStart="2"
              SlideEnd="3"
              line="line-272"
            />
          </div>
        </div>
        <div className="Page1 Portfolio_text_Section">
          <Container>
            <Row>
              <Col>
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
              </Col>
            </Row>
          </Container>
        </div>
        <div className="Page1 Portfolio_Section">
          <div>
            <PortfolioSection
              PortfolioImage={Aurilian_portfolio_site}
              PortfolioText="Aurelian Origins"
              SlideStart="3"
              SlideEnd="3"
              line="line-180"
            />
          </div>
        </div>
        <div className="Page1 Portfolio_text_Section">
          <Container>
            <Row>
              <Col>
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
              </Col>
            </Row>
          </Container>
        </div>
        <div className="Page1 Join_Section">
          <div className="Join_Section_Wrapper">
            <div
              claasName="Join_Section_last_Wrapper"
              style={{ paddingTop: "14%" }}
            >
              <div>
                <h2 className="size_225 line-272 letter-1_5 text_white">
                  Join Us
                </h2>
              </div>
              <div className="d-flex justify-content-center careers_section_img">
                <h5 className="size_16 line-24 letter_0_5 text-white">
                  Careers
                </h5>
                <img src={careers_arrow} alt="..." />
              </div>
            </div>
          </div>
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

export default HomePage;
