import React from "react";
import Fb_Icon from "../Resources/Images/About/Fb_Icon.svg";
import LinkdIn_Icon from "../Resources/Images/About/LinkdIn_Icon.svg";
import Twitter_Icon from "../Resources/Images/About/Twitter_Icon.svg";
import Down_Arrow from "../Resources/Images/About/Down_Arrow.svg";
import Vision_Line_HomePage from "../Resources/Images/Homepage/Vision_Line_HomePage.svg";
function SectionHeading({ title, find, Us, here }) {
  return (
    <div>
      <div className="about_section_wrapper Page3">
        <div className="about_section_heading d-flex">
          <div style={{ position: "relative" }} className="d-flex">
            <h2 className="size_225 line-272 letter-1_5 text_black_dark">
              {title}
            </h2>
            <h2
              className="size_52 letter-1_5 text_black_dark line-52"
              id="chalo"
            >
              {find} <br />
              {Us}
              <br />
              {here}
            </h2>
          </div>
        </div>
        <div className="about_section">
          <div className="about_section_images_wrapper">
            <div className="about_section_images">
              <img src={Twitter_Icon} alt="..." />
            </div>
            <div className="about_section_images">
              <img src={LinkdIn_Icon} alt="..." />
            </div>
            <div className="about_section_images">
              <img src={Fb_Icon} alt="..." />
            </div>
          </div>
          <div>
            <img src={Down_Arrow} alt="..." />
          </div>
          <div className="about_us_contact_section">
            <h6 className="size_16 line-24 letter_0_5">Contact Us</h6>
            <img src={Vision_Line_HomePage} alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionHeading;
