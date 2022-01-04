import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionHeading from "../Components/SectionHeading";
import "./Contact.css";

import Badshahi_Masjid from "../Resources/Images/Contact/Badshahi_masijid.jpg";

import Send_btn_Arroe from "../Resources/Images/Contact/Send_btn_Arroe.svg";
import Navbar from "../Components/Navbar";
function Contact() {
  return (
    <>
      <div className="HomePage-navbar-wrapper">
        <Navbar />
      </div>
      <div className="Conatct_wrapper">
        <div className="Page10">
          <SectionHeading title="Hi" find="Find" Us="Us" here="here" />
        </div>
        <div className="Page10 d-flex align-content-center Lahore_Container">
          <Container fluid className="px-0">
            <Row>
              <Col lg={7} className="d-flex align-items-center badShahi_mosque">
                <div>
                  <img
                    src={Badshahi_Masjid}
                    alt="..."
                    className="img-fluid"
                  ></img>
                </div>
              </Col>
              <Col lg={5}>
                <div className="Hr_Department_Contact">
                  <div className="Hr_Department_Contact_container">
                    <div style={{ marginBottom: "8px" }}>
                      <h5 className="size_24 line-24 letter_0_5 text_white">
                        +92 301 1166 523
                      </h5>
                    </div>
                    <div style={{ marginBottom: "32px" }}>
                      <h5 className="size_24 line-40 letter_0_5 text_white">
                        contact@terafort.com
                      </h5>
                    </div>
                    <div className="col-md-5" style={{ marginBottom: "12px" }}>
                      <h5 className="size_16 line-30 letter_0_5 text_white_Rgba">
                        Terafort, Third Floor, The Plaza 100, MM Alam Road,
                        Lahore
                      </h5>
                    </div>
                    <div>
                      <h5 className="size_16 line-30 letter_0_5 text_white">
                        view on map
                      </h5>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <div className="contact_Lahore_heading">
            <h2 className="size_225 line-272 letter-1_5 text_white ">Lahore</h2>
          </div>
        </div>
        <div className="Page10">
          <Container>
            <Row>
              <Col md={12}>
                <div className="Hr_Department_Contact_Filed">
                  <div className="Hr_Department_Contact_second_filled">
                    <Row>
                      <Col md={2}>
                        <h5 className="size_24 line-36 text_black_dark">
                          Get in touch with us
                        </h5>
                      </Col>
                    </Row>
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

export default Contact;
