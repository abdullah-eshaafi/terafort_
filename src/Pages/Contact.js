import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionHeading from "../Components/SectionHeading";
import "./Contact.css";

import Badshahi_Masjid from "../Resources/Images/Contact/Badshahi_masijid.jpg";

import Send_btn_Arroe from "../Resources/Images/Contact/Send_btn_Arroe.svg";
import Navbar from "../Components/Navbar";

import terafort_logo from "../Resources/Images/Homepage/terafort_logo.svg";
import Tera_White from "../Resources/Images/Homepage/Tera_White.svg";

import side_menu from "../Resources/Images/Homepage/side_menu.svg";
import Bar_white from "../Resources/Images/Homepage/Bar_white.svg";

import { useInView } from "react-intersection-observer";

import axios from "axios";
function Contact() {
  const [section1Ref, section1InView] = useInView({ threshold: 0.5 });
  const [section2Ref, section2InView] = useInView({ threshold: 0.5 });
  const [section3Ref, section3InView] = useInView({ threshold: 0.5 });
  const [section4Ref, section4InView] = useInView({ threshold: 0.5 });

  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Regex for Email.

  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [spiner, setSpiner] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [text, setText] = useState("");

  const [nameClass, setNameClass] = useState("");
  const [emailClass, setEmailClass] = useState("");
  const [phoneClass, setPhoneClass] = useState("");
  const [textclass, setTextClass] = useState("");

  const [error_email, setError_email] = useState("");
  const [error_name, setError_name] = useState("");
  const [error_phone, setError_phone] = useState("");
  const [error_text, setError_text] = useState("");
  const [success_message, setSuccess_Message] = useState("");

  const handleSendMessage = () => {
    // console.log("working");
    if (Name === "" || email === "" || PhoneNumber === "" || text === "") {
      setNameClass("error-field3");
      setError_name("Please enter a valid name");
      setEmailClass("error-field3");
      setError_email("Please enter a valid email");
      setPhoneClass("error-field3");
      setError_phone("Please enter a valid phone number");
      setTextClass("error-field3");
      setError_text("Please write your message");
      if (Name !== "") {
        setNameClass("");
        setError_name("");
      }
      if (email !== "") {
        if (email.match(regexEmail)) {
          setEmailClass("");
          setError_email("");
        }
      }
      if (PhoneNumber !== "") {
        // setPhoneClass("");
        handlePhoneValidate();
        // console.log(number);
      }
      if (text !== "") {
        // setTextClass("");
        // setError_text("");
        handleTextValidate();
        // console.log("adf");
      }
    } else {
      if (email.match(regexEmail)) {
        // console.log("email valid");
        setEmailClass("");
        setError_email("");
        setPhoneClass("");

        // console.log(Name + " " + number + " " + email + " " + text);
        Handle_Call_API();
      } else {
        // console.log("email invalid");
        setError_email("Please enter a valid email");
        setEmailClass("error-field3");
        setTextClass("");
      }
    }
  };
  //===================================== handle number input field function  ===============================
  const Handle_Call_API = (e) => {
    let data = {
      full_name: Name,
      phone: PhoneNumber,
      email: email,
      message: text,
    };
    setSpiner("spinner-border");

    // console.log(
    //   data.full_name + " " + data.phone + " " + data.email + " " + data.message
    // );
    // console.log(data.full_name);

    axios
      .post("https://api.terafort.com/api/contactUs", data)
      .then((r) => {
        console.log(r.status);
        // setPhoneNumber("");
        if (r.status === 200) {
          // console.log("dfgrf");
          // setPhoneNumber("");
          setSuccess_Message("Sent successfully");
          setSpiner("");
          setTimeout((e) => {
            setSuccess_Message("");
            setName("");
            setEmail("");
            setPhoneNumber("");
            setText("");
            setSpiner("");
          }, 2000);
        }
      })
      .catch((e) => {});
  };

  //===================================== handle number input field function  ===============================
  const handleNumberChange = (e) => {
    let element = e.target;
    element.value = element.value.replace(/[^0-9]/gi, "");
    setPhoneNumber(e.target.value);
    if (PhoneNumber === "") {
      setPhoneClass("");
      setError_phone("");
    }
  };

  //===================================== handle name input field function  ===============================
  const handleNameChange = (e) => {
    let element = e.target;
    element.value = element.value.replace(/[^A-Za-z\s]/gi, "");
    setName(e.target.value);
    setNameClass("");
    setError_name("");

    // console.log(Name)
  };

  //===================================== handle email input field function  ===============================
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailClass("");
    setError_email("");
    // console.log(email)
  };

  //===================================== handle text input field function  ===============================
  const handletextChange = (e) => {
    setText(e.target.value);
    setTextClass("");
    setError_text("");
    // console.log(text)
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

  //===================================== handle name Validate function  ===============================
  const handleNameValidate = (e) => {
    if (Name === "") {
      setNameClass("");
      setError_name("");
    }
  };

  //===================================== handle Phone Validate function  ===============================
  const handlePhoneValidate = (e) => {
    if (PhoneNumber === "") {
      setPhoneClass("");
      setError_phone("");
    }
    if (PhoneNumber.length < 11) {
      setPhoneClass("error-field3");
      setError_phone("Please enter a valid phone number");
    } else {
      setPhoneClass("");
      setError_phone("");
    }
  };
  //===================================== handle Text Validate function  ===============================
  const handleTextValidate = (e) => {
    if (text === "") {
      setTextClass("");
      setError_text("");
    }
    if (text !== "") {
      let text_length = parseInt(text.length);
      if (text_length <= 7) {
        // console.log("checkmate")
        setTextClass("error-field3");
        setError_text("Minimum length of 7 Characters required");
      } else {
        setError_text("");
        setTextClass("");
      }
    }
  };

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
      <div className="Conatct_wrapper">
        <div className="Page10">
          <SectionHeading title="Hi" find="Find" Us="Us" here="here" />
        </div>
        <div
          className="Page10 d-flex align-content-center Lahore_Container"
          ref={section1Ref}
        >
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
                            <input
                              type="text"
                              name="input-text"
                              id="input-text"
                              required
                              spellCheck="false"
                              value={Name}
                              className={nameClass}
                              autoComplete="off"
                              onChange={handleNameChange}
                              onBlur={handleNameValidate}
                              placeholder="Full Name"
                            />
                            <p className={nameClass}>{error_name}</p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center contact_form_input">
                          <div className="col-md-6">
                            <input
                              type="text"
                              name="input-text"
                              id="input-text"
                              required
                              spellCheck="false"
                              className={emailClass}
                              value={email}
                              onChange={handleEmailChange}
                              onBlur={handleEmailValidate}
                              autoComplete="off"
                              placeholder="Email"
                            />
                            <p className={emailClass}>{error_email}</p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center contact_form_input">
                          <div className="col-md-6">
                            <input
                              type="text"
                              maxLength={15}
                              required
                              spellCheck="false"
                              className={phoneClass}
                              value={PhoneNumber}
                              onChange={handleNumberChange}
                              onBlur={handlePhoneValidate}
                              placeholder="Phone Number"
                            />
                            <p className={phoneClass}>{error_phone}</p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center contact_form_input">
                          <div className="col-md-6">
                            <textarea
                              type="text"
                              id="input-text"
                              name="input-text"
                              rows="4"
                              required
                              cols="50"
                              className={textclass}
                              value={text}
                              onChange={handletextChange}
                              onBlur={handleTextValidate}
                              placeholder="Your Message"
                            />
                            <p className={textclass}>{error_text}</p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center ">
                          <div className="col-md-6">
                            {" "}
                            <button
                              type="submit"
                              id="send_msg_btn"
                              onClick={handleSendMessage}
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
