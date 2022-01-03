import React from "react";
import "./PortfolioSection.css";

import LightSpeed from "react-reveal/LightSpeed";

import White_Vertical_Line from "../Resources/Images/Homepage/White_Vertical_Line.png";
import { Container, Row, Col } from "react-bootstrap";

import Zoom from "react-reveal/Zoom";
function PortfolioSection({
  PortfolioImage,
  PortfolioText,
  SlideStart,
  SlideEnd,
  line,
}) {
  return (
    <Container>
      <Row>
        <Col>
          <div className="Portfolio_Section_Wrapper">
            <div className="Eshaafi_Portfolio_Img_Section ">
              <div className="d-flex">
                <div className="text_white Eshaafi_Portfolio_Slides">
                  <h6 className="size_16 line-24 letter_0_5">{SlideEnd}</h6>
                  <div>
                    <img src={White_Vertical_Line} alt="..." />
                  </div>
                  <h6 className="size_16 line-24 letter_0_5">{SlideStart}</h6>
                </div>
                <Zoom reset={true}>
                  <img src={PortfolioImage} alt="..." className="img-fluid" />
                </Zoom>
              </div>
            </div>
            <Zoom left cascade delay={1000} duration={500}>
              <div className="Eshaafi_Portfolio_heading_Section">
                {" "}
                <h1
                  className={`size_225 ${line} letter-1_5 text_white text-center`}
                >
                  {PortfolioText}
                </h1>{" "}
              </div>
            </Zoom>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default PortfolioSection;
