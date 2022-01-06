import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionHeading from "../Components/SectionHeading";
import "./Career.css";
import Careers_Facility from "../Resources/Images/Careers/Careers_Facility.jpg";
import Careers_horizontal_Line from "../Resources/Images/Careers/Careers_horizontal_Line.svg";

import game_development from "../Resources/Images/Careers/game-development.svg";
import app_development from "../Resources/Images/Careers/app-development.svg";

import game_planning from "../Resources/Images/Careers/game-planning.svg";
import d_modeling from "../Resources/Images/Careers/3d_modeling.svg";

import web_development from "../Resources/Images/Careers/web_development.svg";

import mobile_app from "../Resources/Images/Careers/mobile_app.svg";

// web_development
import { CareerData } from "../Components/CareerData.js";

import Navbar from "../Components/Navbar";

import Send_btn_Arroe from "../Resources/Images/Contact/Send_btn_Arroe.svg";

function Careers() {
  return (
    <>
      {" "}
      <div className="HomePage-navbar-wrapper">
        <Navbar />
      </div>
      <div className="Careers_Page_wrapper">
        <div className="page5">
          <SectionHeading title="Careers" />
        </div>
        <div className="page5">
          <div className="page5">
            <Container>
              <Row className="Careers_facility_wrapper_Container">
                <Col lg={6} className="Careers_facility_img_wrapper">
                  <img src={Careers_Facility} alt="..." className="img-fluid" />
                </Col>
                <Col lg={5} className="my-auto Careers_facility_wrapper">
                  <Col lg={11}>
                    <div>
                      <h5 className="size_32 line-56">Facilities</h5>
                    </div>
                    <div className="Faciliteis_heading">
                      <h5 className="size_16 line-28 text_black_dark">
                        As part of the organizational framework to fine-tune our
                        excellence, we have successfully put up:
                      </h5>
                    </div>
                    <div className="facilities_list">
                      <ul>
                        <li className="size_16 line-28 text_black_dark">
                          All needed infrastructure in place
                        </li>
                        <li className="size_16 line-28 text_black_dark">
                          {" "}
                          Decision making sessions
                        </li>
                        <li className="size_16 line-28 text_black_dark">
                          {" "}
                          Equality in senior and junior teammates{" "}
                        </li>
                        <li className="size_16 line-28 text_black_dark">
                          We also aim to bless the ambiance of our environment
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div className="page5">
          <Container>
            <Row>
              <Col lg={7}>
                <div className="d-flex justify-content-between Career_Roles_Wrapper">
                  <h5 className="size_32 line-56 text_black_dark">
                    Open Roles
                  </h5>

                  <img src={Careers_horizontal_Line} alt="..." />

                  <h5
                    className="size_16 line-28 text_black_dark"
                    id="Career_Family_section"
                  >
                    be a part of the growing Terafort family
                  </h5>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={12} className="d-flex">
                <Col lg={7}>
                  <div className="careers_table_wrapper">
                    <h5 className="size_16 line-28 letter_0_5 text_A2A2A2">
                      Position
                    </h5>
                  </div>
                </Col>
                <Col lg={5} className="d-flex ">
                  <Col lg={7}>
                    <div className="careers_table_wrapper">
                      <h5 className="size_16 line-28 letter_0_5 text_A2A2A2">
                        Contract type
                      </h5>
                    </div>
                  </Col>
                  <Col lg={3}>
                    <div className="careers_table_wrapper careers_table_last_element">
                      <h5 className="size_16 line-28 letter_0_5 text_A2A2A2">
                        Location
                      </h5>
                    </div>
                  </Col>
                </Col>
              </Col>
            </Row>
            {CareerData.map((data, index) => (
              <Row key={index}>
                <Col lg={12} className="d-flex ">
                  <Col lg={7} className="careers_dark_table_wrapper">
                    <div className="careers_table_wrapper">
                      <h5 className="size_24 line-56 letter_0_5 text_black_dark">
                        {data.position}
                      </h5>
                    </div>
                  </Col>
                  <Col lg={5} className="d-flex ">
                    <Col lg={7} className="careers_dark_table_wrapper">
                      <div className="careers_table_wrapper">
                        <h5 className="size_24 line-56 letter_0_5 text_black_dark">
                          {data.Time}
                        </h5>
                      </div>
                    </Col>
                    <Col lg={3} className="careers_dark_table_wrapper">
                      <div className="careers_table_wrapper careers_table_last_element">
                        <h5 className="size_24 line-56 letter_0_5 text_black_dark">
                          {data.Loctaion}
                        </h5>
                      </div>
                    </Col>
                  </Col>
                </Col>
              </Row>
            ))}
          </Container>
        </div>
        <div className="page5 About_Departments_wrapper  text-center">
          <Container>
            <Row className="About_Departments_Container">
              <Col lg={9} className="my-auto mx-auto">
                <div className="d-flex justify-content-center align-items-center About_Departments_Wrapper">
                  <div className="col-lg-4">
                    <div>
                      <img src={game_development} alt="..." />
                    </div>
                    <div className="mt_40">
                      <h5 className="size_24 line-24 text_black_dark">
                        Game Development
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div>
                      <img src={app_development} alt="..." />
                    </div>
                    <div className="mt_40">
                      <h5 className="size_24 line-24 text_black_dark">
                        App Development
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div>
                      <img src={game_planning} alt="..." />
                    </div>
                    <div className="mt_40">
                      <h5 className="size_24 line-24 text_black_dark">
                        Game Planning
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="d-flex About_Departments_Wrapper justify-content-center">
                  <div className="col-lg-4">
                    <div>
                      <img src={d_modeling} alt="..." />
                    </div>
                    <div className="mt_40">
                      <h5 className="size_24 line-24 text_black_dark">
                        3D Modeling
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div>
                      <img src={web_development} alt="..." />
                    </div>
                    <div className="mt_40">
                      <h5 className="size_24 line-24 text_black_dark">
                        Web Development
                      </h5>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div>
                      <img src={mobile_app} alt="..." />
                    </div>
                    <div className="mt_40">
                      <h5 className="size_24 line-24 text_black_dark">
                        UI/UX Designing
                      </h5>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <div className="Careers_Departments">
            <h2 className="size_225 line-272 letter-1_5  text_white">
              Departments
            </h2>
          </div>
        </div>
        <div className="page5 Career_ApplY_section_wrapper">
          <Container>
            <Row>
              <Col>
                <div className="Careers_Apply">
                  <h5 className="size_24 line-36 text_black_dark">Apply Now</h5>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center">
                <div className="col-lg-9 Careers_Apply_text">
                  <p className="size_32  line-56 text_black_dark">
                    Haven’t seen your dream job in our open roles, but think you
                    and Terafort are a perfect match? Then, don’t miss out and
                    apply now. Let’s meet and have do cup chaye and discuss your
                    dream role.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
          <div className="Departments_heading_Text_position">
            <h2 className="size_225 line-272 letter-1_5  text_black_rgba">
              Join Us
            </h2>
          </div>
        </div>
        <div className="page8">
          <Container>
            <Row className="d-flex justify-content-center">
              <Col md={12}>
                <div className="d-flex justify-content-center contact_form_input">
                  <div className="col-md-6">
                    <input type="text" placeholder="Full Name" />
                  </div>
                </div>
                <div className="d-flex justify-content-center contact_form_input">
                  <div className="col-md-6">
                    <input type="text" placeholder="Email" />
                  </div>
                </div>
                <div className="d-flex justify-content-center contact_form_input">
                  <div className="col-md-6">
                    <input type="text" placeholder="Phone Number" />
                  </div>
                </div>
                <div className="d-flex justify-content-center contact_form_input">
                  <div className="col-md-6">
                    <textarea type="text" placeholder="Your Message" />
                  </div>
                </div>
                <div className="d-flex justify-content-center ">
                  <div className="col-md-6">
                    <button type="submit" id="send_msg_btn">
                      Send <img src={Send_btn_Arroe} alt="..."></img>
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
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

export default Careers;
