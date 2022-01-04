import React from "react";

//Styling from external files

import "./Section.css";

//images of Page

import Fade from "react-reveal/Fade";

function Section({
  BgHeading,
  MainText,
  LinkText,
  HomePage_Right_Arrow,
  BgHeadingClass,
  marginTop,
  Vision_Line_HomePage,
  HomePage_Left_Arrow,
  Mission_right_arrow,
}) {
  return (
    <div className="Who_section_container">
      <div
        className="Vision_digits"
        style={{
          display: Vision_Line_HomePage ? Vision_Line_HomePage : "none",
        }}
      >
        <h6 className="size_16 line-24 letter_0_5 text_black_dark">1</h6>
        <img src={Vision_Line_HomePage} alt="..." />
        <h6 className="size_16 line-24 letter_0_5 text_black_dark">4</h6>
      </div>
      <div className="Who_section_wrapper">
        <div className="Who_section_bg_text line-272">
          <Fade top duration={1200} delay={700}>
            <h2
              className={`size_225 letter-1_5 ${BgHeadingClass}`}
              data-aos="flip-left"
            >
              {BgHeading}
            </h2>
          </Fade>
        </div>
        <div className="Who_section_main_text">
          <div
            className="Who_section_main_text_cneter"
            style={{ marginTop: marginTop }}
          >
            <Fade bottom duration={1200} delay={1200}>
              <p className="size_32 line-56 text_black_dark WhoMAINtext">
                {MainText}
              </p>
            </Fade>
            <Fade left duration={1500} delay={2000} distance={"20%"}>
              <div className="about_text_section">
                <div className="d-flex">
                  <div>
                    <h6 className="size_16 line-24 letter_0_5 text_black_dark">
                      {LinkText}
                    </h6>
                  </div>
                  <div
                    className="about_img_section"
                    style={{
                      display: HomePage_Right_Arrow
                        ? HomePage_Right_Arrow
                        : "none",
                    }}
                  >
                    <img src={HomePage_Right_Arrow} alt="..." />
                  </div>
                </div>
              </div>{" "}
            </Fade>
          </div>
        </div>
      </div>
      <div
        className="Mission_bootom_arrows"
        style={{ display: HomePage_Left_Arrow ? HomePage_Left_Arrow : "none" }}
      >
        <img src={HomePage_Left_Arrow} alt="..." id="HomePage_Left_Arrow" />
        <img src={Mission_right_arrow} alt="..." />
      </div>
    </div>
  );
}

export default Section;
