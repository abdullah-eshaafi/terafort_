import React, { useState } from "react";

import SectionHeading from "../Components/SectionHeading";
import "./Gallery.css";
import Careers_horizontal_Line from "../Resources/Images/Contact/Gallery_Horizontal_Line.svg";

import { Container, Row, Col } from "react-bootstrap";

import Navbar from "../Components/Navbar";

import one from "../Resources/Images/Gallery/Large/1.png";

import two from "../Resources/Images/Gallery/Large/2.png";

import three from "../Resources/Images/Gallery/Large/3.png";

import four from "../Resources/Images/Gallery/Large/4.png";

import five from "../Resources/Images/Gallery/Large/5.png";

import six from "../Resources/Images/Gallery/Large/6.png";

import seven from "../Resources/Images/Gallery/Large/7.png";

import eight from "../Resources/Images/Gallery/Large/8.png";

import nine from "../Resources/Images/Gallery/Large/9.png";
import ten from "../Resources/Images/Gallery/Large/10.png";
import ele from "../Resources/Images/Gallery/Large/11.png";
import twe from "../Resources/Images/Gallery/Large/12.png";

import thirt from "../Resources/Images/Gallery/Large/13.png";
import fout from "../Resources/Images/Gallery/Large/14.png";

import fift from "../Resources/Images/Gallery/Large/15.png";

import HomePage_Left_Arrow from "../Resources/Images/About/Left_Arrow.svg";
import HomePage_Right_Arrow from "../Resources/Images/About/Right_Arrow.svg";

import terafort_logo from "../Resources/Images/Homepage/terafort_logo.svg";
import Tera_White from "../Resources/Images/Homepage/Tera_White.svg";

import side_menu from "../Resources/Images/Homepage/side_menu.svg";
import Bar_white from "../Resources/Images/Homepage/Bar_white.svg";

import { useInView } from "react-intersection-observer";

import Line_ from "../Resources/Images/Gallery/Line.svg";

import one_ from "../Resources/Images/Gallery/1.svg";
import two_ from "../Resources/Images/Gallery/2.svg";

function Gallery() {
  const item = [
    {
      src: one,
      text: "Mr. Shafique Anwar, CEO of Terafort, delivering a speech at company dinner",
    },
    {
      src: two,
      text: "Mussayib Quddusi, UX Designer, sharing his professional experience at Terafort",
    },
    {
      src: three,
      text: "Adnan Hasan from the Marketing department rocking the stage",
    },
    {
      src: four,
      text: "Members of several different teams come together for a group photo",
    },
    {
      src: five,
      text: "Members from the team eShaafi come togther for a photo",
    },
    {
      src: six,
      text: "Our team members having a good time",
    },
    {
      src: seven,
      text: "A memorable dinner at the Pearl Continental Hotel, Lahore",
    },
    {
      src: eight,
      text: "Our repectable team members, enjoying their evening",
    },
    {
      src: nine,
      text: "Team eShaafi poses for a group photo",
    },
    {
      src: ten,
      text: "Our honorary guests enjoying their evening with Terafort",
    },
  ];

  const items = [
    {
      src: ele,
      text: "Very first employees honoured with cake cutting ceremony at Terafort office",
    },
    {
      src: twe,
      text: "CEO, Mr Shafique Anwar welcoming the newest members of the Terafort family",
    },
    {
      src: thirt,
      text: "The professional working environment at Terafort",
    },
    {
      src: fout,
      text: "Mussayib, the UX Desiger from team eShaafi, at his workstation",
    },
    {
      src: fift,
      text: "eShaafi- a brand that stands for the best healthcare opportunities for everyone",
    },
  ];
  const [currentIndex, setcurrentIndex] = useState(0);
  const [secondIndex, setsecondIndex] = useState(1);
  const [LastIndex, setLastIndex] = useState(item.length - 1);

  const [currentIndexs, setcurrentIndexs] = useState(0);
  const [secondIndexs, setsecondIndexs] = useState(1);
  const [LastIndexs, setLastIndexs] = useState(items.length - 1);

  const handlePrevs = () => {
    setcurrentIndexs(
      currentIndexs === 0 ? items.length - 1 : currentIndexs - 1
    );
    setsecondIndexs(secondIndexs === 0 ? items.length - 1 : secondIndexs - 1);
    setLastIndexs(LastIndexs === 0 ? items.length - 1 : LastIndexs - 1);
  };

  const handlenexts = () => {
    setcurrentIndexs(
      currentIndexs === items.length - 1 ? 0 : currentIndexs + 1
    );
    setsecondIndexs(secondIndexs === items.length - 1 ? 0 : secondIndexs + 1);
    setLastIndexs(LastIndexs === items.length - 1 ? 0 : LastIndexs + 1);
  };

  const handlePrev = () => {
    setcurrentIndex(currentIndex === 0 ? item.length - 1 : currentIndex - 1);
    setsecondIndex(secondIndex === 0 ? item.length - 1 : secondIndex - 1);
    setLastIndex(LastIndex === 0 ? item.length - 1 : LastIndex - 1);
  };
  const handlenext = () => {
    setcurrentIndex(currentIndex === item.length - 1 ? 0 : currentIndex + 1);
    setsecondIndex(secondIndex === item.length - 1 ? 0 : secondIndex + 1);
    setLastIndex(LastIndex === item.length - 1 ? 0 : LastIndex + 1);
  };
  const [section1Ref, section1InView] = useInView({ threshold: 0.5 });
  const [section2Ref, section2InView] = useInView({ threshold: 0.5 });
  const [section3Ref, section3InView] = useInView({ threshold: 0.5 });
  const [section4Ref, section4InView] = useInView({ threshold: 0.5 });
  return (
    <>
      <div className="HomePage-navbar-wrapper">
        <Navbar
          src={
            section1InView
              ? Tera_White
              : section2InView
              ? Tera_White
              : section3InView
              ? Tera_White
              : section4InView
              ? Tera_White
              : terafort_logo
          }
          img={
            section1InView
              ? Bar_white
              : section2InView
              ? Bar_white
              : section3InView
              ? Bar_white
              : section4InView
              ? Bar_white
              : side_menu
          }
        />
      </div>
      <div className="Gallery_wrapper">
        <div className="Page12">
          <SectionHeading title="Gallery" />
        </div>
        <div
          className="Page12 galeery_First_Wrapper all-top-spacing"
          ref={section1Ref}
        >
          <Container>
            <Row>
              <Col lg={8}>
                <div className="d-md-flex justify-content-between Career_Roles_Wrapper">
                  <h5 className="size_32 line-56 text_white">Company Dinner</h5>

                  <img src={Careers_horizontal_Line} alt="..." />

                  <h5
                    className="size_16 line-28 text_white"
                    id="Career_Family_section"
                  >
                    June 25, 2021 at Pearl Continental, Lahore
                  </h5>
                </div>
              </Col>
            </Row>
          </Container>
          <div className="slider_wrapper_gallery ">
            <div className="col-lg-12 d-flex align-items-center justify-content-around">
              <div className="col-lg-4 sm-first-wrapper">
                {item.map((ite, index) => (
                  <div
                    className={index === LastIndex ? "slide active" : "slide"}
                  >
                    {index === LastIndex && (
                      <div className="sm-img">
                        <img src={ite.src} alt="..."></img>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="col-lg-4 lg-first-wrapper">
                {item.map((ite, index) => (
                  <div
                    className={
                      index === currentIndex ? "slide active" : "slide"
                    }
                  >
                    {index === currentIndex && (
                      <div className="sm-img">
                        <img src={ite.src} alt="..."></img>
                        <p
                          className="size_16 line-28 text_white"
                          style={{ paddingTop: "8px" }}
                        >
                          {ite.text}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="col-lg-4 sm-first-wrapper">
                {item.map((ite, index) => (
                  <div
                    className={index === secondIndex ? "slide active" : "slide"}
                  >
                    {index === secondIndex && (
                      <div className="sm-img">
                        <img src={ite.src} alt="..."></img>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <Row>
              <Col className="d-flex Sluider_conting_wrappers col-lg-10">
                <div className="Slider_Counting_Numbers col-lg-8 d-flex justify-content-lg-end justify-content-center">
                  <button className="no_btn" onClick={handlePrev}>
                    <img src={HomePage_Left_Arrow} id="arrow_img" alt="..." />
                  </button>
                  <button className="no_btn" onClick={handlenext}>
                    <img src={HomePage_Right_Arrow} alt="..." />
                  </button>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div
          className="Page12 galeery_First_Wrapper_ all-top-spacing"
          ref={section2Ref}
        >
          <Container>
            <Row>
              <Col lg={8}>
                <div className="d-md-flex justify-content-between Career_Roles_Wrapper">
                  <h5 className="size_32 line-56 text_black_dark">
                    Inauguration
                  </h5>

                  <img src={Line_} alt="..." />

                  <h5
                    className="size_16 line-28 text_black_dark"
                    id="Career_Family_section"
                  >
                    March 08, 2021 at Terafort Office, Lahore
                  </h5>
                </div>
              </Col>
            </Row>
          </Container>
          <div className="slider_wrapper_gallery ">
            <div className="col-lg-12 d-flex align-items-center justify-content-around">
              <div className="col-lg-4 sm-first-wrapper">
                {items.map((ite, index) => (
                  <div
                    className={index === LastIndexs ? "slide active" : "slide"}
                  >
                    {index === LastIndexs && (
                      <div className="sm-img">
                        <img src={ite.src} alt="..."></img>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="col-lg-4 lg-first-wrapper">
                {items.map((ite, index) => (
                  <div
                    className={
                      index === currentIndexs ? "slide active" : "slide"
                    }
                  >
                    {index === currentIndexs && (
                      <div className="sm-img">
                        <img src={ite.src} alt="..."></img>
                        <p
                          className="size_16 line-28 text_black_dark"
                          style={{ paddingTop: "8px" }}
                        >
                          {ite.text}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="col-lg-4 sm-first-wrapper">
                {items.map((ite, index) => (
                  <div
                    className={
                      index === secondIndexs ? "slide active" : "slide"
                    }
                  >
                    {index === secondIndexs && (
                      <div className="sm-img">
                        <img src={ite.src} alt="..."></img>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <Row>
              <Col className="d-flex Sluider_conting_wrappers  col-lg-10">
                <div className="Slider_Counting_Numbers col-lg-8 d-flex  justify-content-lg-end justify-content-center">
                  <button className="no_btn" onClick={handlePrevs}>
                    <img src={one_} alt="..." id="arrow_img" />
                  </button>
                  <button className="no_btn" onClick={handlenexts}>
                    <img src={two_} alt="..." />
                  </button>
                </div>
              </Col>
            </Row>
          </div>
          <div className="Footer Page2 Gallery_Footer">
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

export default Gallery;
