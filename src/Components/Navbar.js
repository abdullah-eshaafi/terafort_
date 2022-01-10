import React, { useState } from "react";

import Terafort_Bg_logo from "../Resources/Images/Homepage/Terafort_Bg_logo.png";
import cross_logo_terafort from "../Resources/Images/Homepage/cross_logo_terafort.svg";

import "./Navbar.css";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

import Tera_White from "../Resources/Images/Homepage/Tera_White.svg";

function Navbar({ src, img }) {
  const [showNavbar, setSHowNavbar] = useState(false);

  const handleShowNavabar = () => {
    setSHowNavbar(!showNavbar);
  };
  return (
    <div className="Navbar_Main_Container">
      <div className="Nabar_main_wrapper">
        {" "}
        <div onClick={handleShowNavabar}>
          <img src={showNavbar ? cross_logo_terafort : img} alt="..."></img>
        </div>
        <div>
          <Link to="/">
            <img src={showNavbar ? Tera_White : src} alt="..."></img>
          </Link>
        </div>
      </div>
      <Fade left collapse when={showNavbar}>
        <div
          className="Navbar_Content_wrapper"
          style={{ display: showNavbar ? showNavbar : "none" }}
        >
          <div className="Navbar_List_Container">
            <ul className="Navabar_List_Wrapper">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/career">Careers</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
            <div className="Terafort_Bg_logo">
              <img src={Terafort_Bg_logo} alt="..."></img>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Navbar;
