import React, { useState } from "react";
import terafort_logo from "../Resources/Images/Homepage/terafort_logo.svg";
import side_menu from "../Resources/Images/Homepage/side_menu.svg";

import Terafort_Bg_logo from "../Resources/Images/Homepage/Terafort_Bg_logo.png";
import cross_logo_terafort from "../Resources/Images/Homepage/cross_logo_terafort.svg";

import "./Navbar.css";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

function Navbar() {
  const [showNavbar, setSHowNavbar] = useState(false);

  const handleShowNavabar = () => {
    setSHowNavbar(!showNavbar);
  };
  return (
    <div className="Navbar_Main_Container">
      <div className="Nabar_main_wrapper">
        <div>
          <Link to="/">
            <img src={terafort_logo} alt="..."></img>
          </Link>
        </div>
        <div onClick={handleShowNavabar}>
          <img
            src={showNavbar ? cross_logo_terafort : side_menu}
            alt="..."
          ></img>
        </div>
      </div>
      <Fade collapse when={showNavbar}>
        <div
          className="Navbar_Content_wrapper"
          style={{ display: showNavbar ? showNavbar : "none" }}
        >
          <div>
            <ul className="Navabar_List_Wrapper">
              <li>Home</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Portfolio</li>
              <li>Gallery</li>
              <li>Contact Us</li>
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
