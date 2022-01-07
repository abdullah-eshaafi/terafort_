import React from "react";
import Fb_Icon from "../Resources/Images/About/Fb_Icon.svg";
import LinkdIn_Icon from "../Resources/Images/About/LinkdIn_Icon.svg";
import Twitter_Icon from "../Resources/Images/About/Twitter_Icon.svg";
import Down_Arrow from "../Resources/Images/About/Down_Arrow.svg";
import Vision_Line_HomePage from "../Resources/Images/Homepage/Vision_Line_HomePage.svg";
import Zoom from "react-reveal/Zoom";

import { Link } from "react-router-dom";

function SectionHeading({ title, find, Us, here }) {
  return (
    <div>
      <div className="about_section_wrapper Page3">
        <div className="about_section_heading d-flex">
          <div style={{ position: "relative" }} className="d-flex">
            <h2 className="size_225 line-272 letter-1_5 text_black_dark">
              <Zoom bottom cascade>
                {title}
              </Zoom>
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
              <a
                href="https://twitter.com/TeraFort_inc"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Twitter_Icon} alt="..." />
              </a>
            </div>
            <div className="about_section_images">
              <a
                href=" https://pk.linkedin.com/company/terafort"
                target="_blank"
              >
                {" "}
                <img src={LinkdIn_Icon} alt="..." />
              </a>
            </div>
            <div className="about_section_images">
              <a href="https://www.facebook.com/Terafort.Inc" target="blank">
                {" "}
                <img src={Fb_Icon} alt="..." />
              </a>
            </div>
          </div>
          <div>
            <img src={Down_Arrow} alt="..." />
          </div>{" "}
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="about_us_contact_section">
              <h6 className="size_16 line-24 letter_0_5">Contact Us</h6>
              <img src={Vision_Line_HomePage} alt="..." />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SectionHeading;
