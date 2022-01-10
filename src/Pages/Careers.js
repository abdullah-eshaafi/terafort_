import React, { useState } from "react";
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

import terafort_logo from "../Resources/Images/Homepage/terafort_logo.svg";
import Tera_White from "../Resources/Images/Homepage/Tera_White.svg";

import side_menu from "../Resources/Images/Homepage/side_menu.svg";
import Bar_white from "../Resources/Images/Homepage/Bar_white.svg";

import axios from "axios";

function Careers() {
  const careerList = [
    "Applying For",
    "IOS Developer",
    "Android Developer",
    "Backend Developer",
    "Frontend Developer",
    "DevOps Engr",
    "UI/UX Designer",
    "SEO Expert",
    "Data Analyst",
    "Computer Graphic Artist",
    "Unity Developer",
    "3D Modeler",
    "2D Animator",
    "Game Designer/Planner",
    "Software Quality Assurance",
    "Accounts Executive",
    "HR Executive",
    "Computer Vision",
  ];

  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Regex for Email.

  const [spiner, setSpiner] = useState("");
  const [success_message, setSuccess_Message] = useState("");

  const [attachments, setAttachment] = useState("");
  const [full_name, setFullName] = useState("");
  const [apply_for, setApplyFor] = useState("");
  const [email, setEmail] = useState("");

  const [emailClass, setEmailClass] = useState("");
  const [error_email, setError_email] = useState("");

  const [error_name, setError_name] = useState("");
  const [nameClass, setNameClass] = useState("");

  const [error_apply, setError_apply] = useState("");
  const [applyClass, setapplyClass] = useState("");

  const [error_file, setError_file] = useState("");
  const [fileClass, setfileClass] = useState("");

  const handleNameChange = (e) => {
    let element = e.target;
    element.value = element.value.replace(/[^A-Za-z\s]/gi, "");
    setFullName(e.target.value);
    setNameClass("");
    setError_name("");

    // console.log(Name)
  };
  //===================================== handle name Validate function  ===============================
  const handleNameValidate = (e) => {
    if (full_name === "") {
      setNameClass("");
      setError_name("");
    }
  };

  //===================================== handle email input field function  ===============================
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailClass("");
    setError_email("");
    // console.log(email)
  };
  //===================================== handle email Validate function  ===============================
  const handleEmailValidate = (e) => {
    if (email === "") {
      setError_email("");
      setEmailClass("");
    }
    if (email !== "") {
      if (email.match(regexEmail)) {
        setError_email("");
      } else {
        setEmailClass("error-field3");
        setError_email("Please enter a valid email");
      }
    }
  };

  //===================================== handle text input field function  ===============================
  const handleApplyChange = (e) => {
    setapplyClass("");
    setError_apply("");
    // console.log(text)
  };

  //===================================== handle setApplyFor input field function  ===============================
  const handleApplyFor = (e) => {
    setApplyFor(e.target.value);
  };

  //===================================== handle submit function  ===============================
  const handleSubmit = (e) => {
    if (
      full_name === "" ||
      apply_for === "" ||
      email === "" ||
      attachments === ""
    ) {
      setNameClass("error-field3");
      setError_name("Please enter a valid name");
      setEmailClass("error-field3");
      setError_email("Please enter a valid email");
      setapplyClass("error-field3");
      setError_apply("Please select a field");
      setfileClass("error-field3");
      setError_file("Please upload your cv");
      if (full_name !== "") {
        setNameClass("");
        setError_name("");
      }
      if (email !== "") {
        if (email.match(regexEmail)) {
          setEmailClass("");
          setError_email("");
        }
      }
      if (apply_for !== "") {
        setapplyClass("");
        setError_apply("");
      }
      if (attachments !== "") {
        setfileClass("");
        setError_file("");
      }
    } else {
      setSpiner("spinner-border");
      const fData = new FormData();
      fData.append("attachments", attachments);
      fData.append("full_name", full_name);
      fData.append("email", email);
      fData.append("apply_for", apply_for);
      axios
        .post("https://api.terafort.com/api/applyForCareer", fData)
        .then((r) => {
          console.log(r);
          if (r.status === 200) {
            setSpiner("");
            setSuccess_Message("Sent successfully");
            setTimeout((e) => {
              setSuccess_Message("");
              setSpiner("");
              setFullName("");
              setEmail("");
              setApplyFor("");
              setAttachment("");
            }, 2000);
            // console.log("dfgrf");
          }
        })
        .catch((e) => {});
    }

    // console.log(apply_for)
    // console.log(attachments)
    // e.preventDefault();
  };
  //===================================== handle submit function  ===============================
  const handleAttachment = (file) => {
    setAttachment(file[0]);
    if (attachments !== "") {
      setError_file("");
    }
    // console.log(attachment)
  };
  //===================================== handle submit function  ===============================
  const handlefileAttachment = (file) => {
    if (attachments !== "") {
      setfileClass("");
      setError_file("");
    }
    if (attachments === "") {
      setfileClass("");
      setError_file("");
    }
  };

  return (
    <>
      {" "}
      <div className="HomePage-navbar-wrapper">
        <Navbar src={terafort_logo} img={side_menu} />
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
          <Container style={{ paddingTop: "40px" }}>
            <Row>
              <Col lg={7} sm={12}>
                <div className="d-flex justify-content-between Career_Roles_Wrapper ">
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
                <Col md={6}>
                  <div className="careers_table_wrapper">
                    <h5 className="size_16 line-28 letter_0_5 text_A2A2A2">
                      Position
                    </h5>
                  </div>
                </Col>

                <Col lg={5} className="d-flex " md={6}>
                  <Col lg={8}>
                    <div className="careers_table_wrapper">
                      <h5 className="size_16 line-28 letter_0_5 text_A2A2A2">
                        Contract type
                      </h5>
                    </div>
                  </Col>
                  <Col>
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
                <Col lg={12} className="d-flex">
                  <Col className="careers_dark_table_wrapper" md={6}>
                    <div className="careers_table_wrapper">
                      <h5 className="size_24 line-56 letter_0_5 text_black_dark">
                        {data.position}
                      </h5>
                    </div>
                  </Col>
                  <Col lg={5} className="d-flex " md={6}>
                    <Col lg={8} className="careers_dark_table_wrapper">
                      <div className="careers_table_wrapper">
                        <h5 className="size_24 line-56 letter_0_5 text_black_dark">
                          {data.Time}
                        </h5>
                      </div>
                    </Col>
                    <Col className="careers_dark_table_wrapper">
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
            <Row
              className="d-flex justify-content-center"
              style={{ paddingTop: "180px" }}
            >
              <Col md={12}>
                <div className="d-flex justify-content-center contact_form_input">
                  <div className="col-md-6 col-12">
                    <input
                      type="text"
                      name="full_name"
                      id="input-text"
                      value={full_name}
                      className={nameClass}
                      required
                      spellCheck="false"
                      onChange={handleNameChange}
                      onBlur={handleNameValidate}
                      autoComplete={"off"}
                      placeholder="Full Name"
                    />
                    <p className={nameClass}>{error_name}</p>
                  </div>
                </div>
                <div className="d-flex justify-content-center contact_form_input">
                  <div className="col-md-6 col-12">
                    <input
                      type="text"
                      name="email"
                      id="input-text"
                      required
                      spellCheck="false"
                      className={emailClass}
                      value={email}
                      onChange={handleEmailChange}
                      onBlur={handleEmailValidate}
                      autoComplete={"off"}
                      placeholder="Email"
                    />
                    <p className={emailClass}>{error_email}</p>
                  </div>
                </div>
                <div className="d-flex justify-content-center contact_form_input">
                  <div className="col-md-6 col-12">
                    <select
                      required
                      spellCheck="false"
                      className={applyClass}
                      onBlur={handleApplyChange}
                      onChange={handleApplyFor}
                      value={apply_for}
                    >
                      {careerList.map((data) => {
                        return (
                          <>
                            {" "}
                            <option value={data} key={data}>
                              {data}
                            </option>
                          </>
                        );
                      })}
                    </select>
                    <p className={applyClass}>{error_apply}</p>
                  </div>
                </div>
                <div className="d-flex justify-content-center contact_form_input">
                  <div className="col-md-6 col-12">
                    <input
                      type="file"
                      accept=".doc, .docx, application/pdf"
                      id="file-upload"
                      onChange={(e) => handleAttachment(e.target.files)}
                      onBlur={handlefileAttachment}
                    />
                    {/* <label htmlFor="file-upload">
                  <span >Upload</span> your resume
                  here
                </label> */}
                    <p className={fileClass}>{error_file}</p>
                  </div>
                </div>

                <div className="d-flex justify-content-center ">
                  <div className="col-md-6">
                    <button
                      type="submit"
                      id="send_msg_btn"
                      onClick={handleSubmit}
                    >
                      {" "}
                      <div className={spiner}></div>
                      Send <img src={Send_btn_Arroe} alt="..."></img>
                    </button>
                    <p className={"m-0"}>{success_message}</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="Footer Page2 Carrer_foote_bg">
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
                      Terafort, Third Floor, The Plaza 100, MM Alam Road, Lahore
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
    </>
  );
}

export default Careers;
