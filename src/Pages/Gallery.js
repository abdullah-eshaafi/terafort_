import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import SectionHeading from "../Components/SectionHeading";
import "./Gallery.css";
import Careers_horizontal_Line from "../Resources/Images/Contact/Gallery_Horizontal_Line.svg";

import Ceo from "../Resources/Images/Gallery/Ceo.jpg";
import cake from "../Resources/Images/Gallery/cake.jpg";
import { Container, Row, Col } from "react-bootstrap";

// import Slider from "react-slick";

import Navbar from "../Components/Navbar";

function Gallery() {
  return (
    <>
      <div className="HomePage-navbar-wrapper">
        <Navbar />
      </div>
      <div className="Gallery_wrapper">
        <div className="Page12">
          <SectionHeading title="Gallery" />
        </div>
        <div className="Page12 galeery_First_Wrapper">
          <Container>
            <Row>
              <Col lg={8}>
                <div className="d-flex justify-content-between Career_Roles_Wrapper">
                  <h5 className="size_32 line-56 text_white">Company Dinner</h5>

                  <img src={Careers_horizontal_Line} alt="..." />

                  <h5
                    className="size_16 line-28 text_white"
                    id="Career_Family_section"
                  >
                    June 25, 2021 at Pearl Continental, Lahore
                  </h5>
                </div>
              </Col>
            </Row>
          </Container>
          <div className="slider_wrapper_gallery">
            <OwlCarousel
              className="owl-carousel owl-theme"
              margin={10}
              items={5}
              nav
              dots={false}
              center={true}
              loop={true}
            >
              <div class="item">
                <h4>1</h4>
              </div>
              <div class="item">
                <h4>2</h4>
              </div>
              <div class="item">
                <h4>3</h4>
              </div>
              <div class="item">
                <h4>4</h4>
              </div>
              <div class="item">
                <h4>5</h4>
              </div>
              <div class="item">
                <h4>6</h4>
              </div>
              <div class="item">
                <h4>7</h4>
              </div>
              <div class="item">
                <h4>8</h4>
              </div>
              <div class="item">
                <h4>9</h4>
              </div>
              <div class="item">
                <h4>10</h4>
              </div>
              <div class="item">
                <h4>11</h4>
              </div>
              <div class="item">
                <h4>12</h4>
              </div>
              <div class="item">
                <h4>13</h4>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
