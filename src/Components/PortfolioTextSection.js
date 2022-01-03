import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Eshaafi_horizontal_Line from "../Resources/Images/Homepage/Eshaafi_horizontal_Line.svg";
import HomePage_Right_Arrow from "../Resources/Images/Homepage/HomePage_Right_Arrow.svg";
import "./PortfolioTextSection.css";
function PortfolioTextSection({
  PortfolioName,
  PortfolioLine,
  PortfolioDesc,
  line,
  align,
  col,
  ImageSpacing,
  TagLineSpacing,
  mt,
}) {
  return (
    <Container>
      <Row className="Potfolio_Text_Wrapper">
        <Col lg={12}>
          <div className={`col-lg-${col} d-lg-flex`}>
            <div className="d-lg-flex align-items-end">
              <h1 className={`size_120 ${line} letter-1_5`}>{PortfolioName}</h1>
            </div>
            <div
              className={`d-lg-flex align-items-${align} ${ImageSpacing} responvie_Portfolio_Line`}
              style={{ marginTop: mt }}
            >
              <img src={Eshaafi_horizontal_Line} alt="..." />
            </div>
            <div className={`d-lg-flex align-items-center ${TagLineSpacing}`}>
              <h5 className="size_24  line-40  letter_0_5 text_black_dark">
                {PortfolioLine}
              </h5>
            </div>
          </div>

          <div className="col-lg-9 PorfolioDesc_Section">
            <p className="size_24 line-40 text_black_dark letter_0_5">
              {PortfolioDesc}
            </p>
          </div>

          <div>
            <div className="col-lg-9 d-flex potfolio_visiting_link">
              <h6 className="size_16 line-24 letter_0_5">Visit Site</h6>
              <img src={HomePage_Right_Arrow} alt="..." />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default PortfolioTextSection;
