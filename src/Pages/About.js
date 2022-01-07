import React, { useEffect, useState } from "react";
import "./About.css";
import { Container, Row, Col } from "react-bootstrap";

//Images of Icons

import CEO_About from "../Resources/Images/About/CEO_About.png";

import about_values_horizontal_line from "../Resources/Images/About/about_values_horizontal_line.svg";

import Slider_Short_Line from "../Resources/Images/About/Slider_Short_Line.svg";

import HomePage_Left_Arrow from "../Resources/Images/About/Left_Arrow.svg";
import HomePage_Right_Arrow from "../Resources/Images/About/Right_Arrow.svg";

import About_Right_Arrow from "../Resources/Images/Homepage/HomePage_Right_Arrow.svg";

import Navbar from "../Components/Navbar";
import SectionHeading from "../Components/SectionHeading";

import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import terafort_logo from "../Resources/Images/Homepage/terafort_logo.svg";
import Tera_White from "../Resources/Images/Homepage/Tera_White.svg";

import side_menu from "../Resources/Images/Homepage/side_menu.svg";
import Bar_white from "../Resources/Images/Homepage/Bar_white.svg";

import { useInView } from "react-intersection-observer";

function About() {
  const [section1Ref, section1InView] = useInView({ threshold: 0.5 });

  const [currentIndex, setcurrentIndex] = useState(0);

  const [items, setItems] = useState([
    {
      id: 1,
      title: "We Never Give Up",
      text: "We will either find a way or make our own but we will never give up easily",
    },
    {
      id: 2,
      title: "DAUNTLESS LOYALTY",
      text: "We remain loyal to our promises for a blissful present, as well as a positive and fortified future",
    },
    {
      id: 3,
      title: "Hope For All",
      text: "We will either find a way or make our own but we will never give up easily",
    },
    {
      id: 4,
      title: "DAUNTLESS LOYALTY",
      text: "We will either find a way or make our own but we will never give up easily",
    },
    {
      id: 5,
      title: "Hope For All",
      text: "The Terafort family serves as a hope for anyone from anywhere in the world.",
    },
  ]);

  const [secondIndex, setsecondIndex] = useState(1);
  const [LastIndex, setLastIndex] = useState(items.length - 1);

  const handlePrev = () => {
    setcurrentIndex(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
    setsecondIndex(secondIndex === 0 ? items.length - 1 : secondIndex - 1);
    setLastIndex(LastIndex === 0 ? items.length - 1 : LastIndex - 1);
  };
  const handlenext = () => {
    setcurrentIndex(currentIndex === items.length - 1 ? 0 : currentIndex + 1);
    setsecondIndex(secondIndex === items.length - 1 ? 0 : secondIndex + 1);
    setLastIndex(LastIndex === items.length - 1 ? 0 : LastIndex + 1);
  };
  return (
    <>
      <div className="HomePage-navbar-wrapper">
        <Navbar
          src={section1InView ? Tera_White : terafort_logo}
          img={section1InView ? Bar_white : side_menu}
        />
      </div>
      <Container fluid className="About_Container_Wrapper px-0">
        <Row>
          <Col>
            <div className="About_Main_Container_wrapper">
              <SectionHeading title="About Us" />
              <div className="Page3">
                <Container>
                  <Row className="all-top-spacing">
                    <Col
                      lg={6}
                      className="d-flex justify-content-lg-end justify-content-center"
                    >
                      <div className="CEO_About_Img_Wrapper">
                        <Fade top delay={500} distance={"20%"}>
                          <img
                            src={CEO_About}
                            alt="..."
                            className="img-fluid"
                          />
                        </Fade>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="CEO_About_Text_Wrapper">
                        <div className="col-lg-8">
                          <div className="about_message_text_section">
                            <Fade top delay={500} distance={"20%"}>
                              {" "}
                              <h5 className="size_32 line-56 text_black_dark">
                                CEO’s Message
                              </h5>
                            </Fade>
                          </div>
                          <div className="CEO_About_Para1">
                            <Fade top delay={500} distance={"20%"}>
                              <p className="size_16 line-28 text_black_dark">
                                Our resolve to make lives better and contribute
                                to humanity, makes us more than just a company.
                                The commitment we have towards people makes us a
                                big family of people coming together to help one
                                another achieve our goals and objectives.
                              </p>
                            </Fade>
                          </div>
                          <div className="CEO_About_Para2">
                            <Fade top delay={500} distance={"20%"}>
                              {" "}
                              <p className="size_16 line-28 text_black_dark">
                                This is easier than anyone would expect because
                                of the open-mindedness of each member of this
                                great family coupled with their qualities of
                                being constructive, practical, and productive.
                              </p>
                            </Fade>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
              <div className="Page3">
                <Container>
                  <Row>
                    <Col lg={7}>
                      <div className="About_Fountaion_Section_Container">
                        {" "}
                        <div className="About_Fountaion_Wrapper">
                          <div className="About_Fountaion_Heading">
                            {" "}
                            <Fade top delay={500} distance={"20%"}>
                              {" "}
                              <h1 className="size_120 line-145 letter-1_5 text_black_dark">
                                Foundation
                              </h1>
                            </Fade>
                          </div>

                          <div>
                            <Fade top delay={500} distance={"20%"}>
                              {" "}
                              <p className="size_24 line-40 letter_0_5 text_black_dark">
                                Terafort as its name depicts is a fast-growing
                                company, providing an invincible and protected
                                career for its employees, whilst ensuring the
                                happiness of every individual associated with
                                the company. The company was established to
                                guarantee the availability of quality and
                                secured employment, especially to fresh
                                graduates, and assist till they reach the peak
                                of their career, hence enriching the quality of
                                people's life. To Terafort, the welfare of the
                                people being boosted and secured is of utmost
                                importance and it's well-tended to.
                              </p>
                            </Fade>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
              <div className="Page3 About_Values_Section" ref={section1Ref}>
                <Container style={{ background: "black" }}>
                  <Row style={{ background: "black" }}>
                    <Col style={{ background: "black" }}>
                      <Row style={{ background: "black" }}>
                        <Col lg={4} style={{ background: "black" }}>
                          <div
                            className="d-md-flex About_Values_Main_Container"
                            style={{ background: "black" }}
                          >
                            <div className="col-lg-6">
                              <h5 className="size_32 line-56 text_white">
                                Our Values
                              </h5>
                            </div>

                            <div className="col-lg-6 d-flex justify-content-center">
                              <img
                                src={about_values_horizontal_line}
                                alt=".."
                              />
                            </div>
                          </div>
                        </Col>
                        <Col lg={8}>
                          <div className="col-lg-9 About_Values_text_Container">
                            <p className="size_16 line-28 letter_0_5 text_white">
                              a two to three line text with a brief summary of
                              all of our values combined, most importantly it
                              must be a single sentence
                            </p>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="d-flex">
                          <div className="Slider_Counting_Numbers col-lg-5 d-flex justify-content-end">
                            <h6 className="text_white size_16 line-24 letter_0_5">
                              1
                            </h6>
                            <img src={Slider_Short_Line} alt="..." />
                            <h6 className="text_white size_16 line-24 letter_0_5">
                              5
                            </h6>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{ height: "236px" }}>
                          <div className="col-lg-12 d-flex">
                            <div className="col-lg-4 Last_Index_Slider">
                              {items.map((item, index) => (
                                <div
                                  key={index}
                                  className={
                                    index === LastIndex
                                      ? "slide active text_Wrapper_slider"
                                      : "slide text_Wrapper_slider"
                                  }
                                >
                                  {index === LastIndex && (
                                    <div className="col-lg-12 Slider_First_Item">
                                      <div>
                                        <h5 className="size_32 line-56 slider_text_animate">
                                          {item.title}
                                        </h5>
                                      </div>{" "}
                                      <div className="col-lg-10">
                                        <p className="size_16 line-28">
                                          {item.text}
                                        </p>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>

                            <div className="col-lg-4">
                              {items.map((item, index) => (
                                <div
                                  key={index}
                                  className={
                                    index === currentIndex
                                      ? "slide active text_white col-lg-12 d-flex justify-content-center"
                                      : "slide text_white col-lg-12 d-flex justify-content-center"
                                  }
                                >
                                  {index === currentIndex && (
                                    <div className="col-lg-10">
                                      <div className="col-lg-12">
                                        <h5 className="size_32 line-56 text_white">
                                          {item.title}
                                        </h5>
                                      </div>
                                      <div className="col-lg-12">
                                        <p className="size_16 line-28 text_white">
                                          {item.text}
                                        </p>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                            <div className="col-lg-4 Last_Index_Slider">
                              {items.map((item, index) => (
                                <div
                                  key={index}
                                  className={
                                    index === secondIndex
                                      ? "slide active Slider_First_ItemSecond col-lg-12 d-flex justify-content-end"
                                      : "slide Slider_First_ItemSecond col-lg-12 d-flex justify-content-end"
                                  }
                                >
                                  {index === secondIndex && (
                                    <div className="col-lg-10">
                                      <div className="col-lg-12">
                                        <h5 className="size_32 line-56 text_white">
                                          {item.title}
                                        </h5>
                                      </div>
                                      <div className="">
                                        <div className="col-lg-12">
                                          <p className="size_16 line-28 text_white">
                                            {item.text}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="d-flex Sluider_conting_wrappers">
                          <div className="Slider_Counting_Numbers col-lg-7 d-flex justify-content-lg-end justify-content-center">
                            <button className="no_btn" onClick={handlePrev}>
                              <img src={HomePage_Left_Arrow} alt="..." />
                            </button>
                            <button className="no_btn" onClick={handlenext}>
                              <img src={HomePage_Right_Arrow} alt="..." />
                            </button>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </div>
              <div className="Page3">
                <div className="Join_Section_About">
                  <Container fluid style={{ overflow: "hidden" }}>
                    <Container>
                      <Row>
                        <Col>
                          <h5 className="size_24 line-36 text_black_dark">
                            Join Us
                          </h5>
                        </Col>
                      </Row>
                    </Container>

                    <Row>
                      <Col className="Join_Section_About_First_Col">
                        <div className="Join_Section_About_container">
                          <div className="Join_Section_About_bg_heading">
                            <h2 className="size_225 line-272 letter-1_5 text_black_rgba">
                              Join Us
                            </h2>
                          </div>
                        </div>
                        <div className="Join_Section_About_text">
                          <div className="col-md-12">
                            <p className="size_32 line-56">
                              Creators, makers, innovators...
                            </p>
                          </div>
                          <div className="col-md-8">
                            <p className="size_32 line-56">
                              Come join our team and make your mark on
                              Terafort’s brave, curious and strategic work.
                              You’re only one you and baby that’s the fun of
                              you.
                            </p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div className="about_career_section d-flex">
                          <h6 className="size_16 line-24">Careers</h6>
                          <img src={About_Right_Arrow} alt="..." />
                        </div>
                      </Col>
                    </Row>
                  </Container>
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
                            <h5 className="size_24 line-36">
                              contact@terafort.com
                            </h5>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between Footer_Address">
                          <div className="col-md-3">
                            <h5 className="size_24 line-36 letter_0_5 text_black_666">
                              Terafort, Third Floor, The Plaza 100, MM Alam
                              Road, Lahore
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
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
