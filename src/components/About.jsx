import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

import "./About.css";
import profile from "../assets/img/profile/profile.png";
const About = () => {
  return (
    <div className="bgi mar-container about-container">
      <Container className="about-container bgi" id="about">
        <Row>
          <Col>
            <h1>ABOUT ME</h1>
          </Col>
        </Row>
      </Container>
      <Container className="bgi">
        <Row>
          <Col>
            <Image src={profile} rounded className="profile-image" />
          </Col>
          <Col>
            {/* { leave here...} */}
            <div className="aobut-name">
              <h6>
                Hi there! I am<b> Kamal Kishor Rajput</b>{" "}
              </h6>
              <p>
                I am currently learning full stack web development at Masai
                School. I am passionate about solving real-world problems and
                actively looking for opportunities in the field of web
                development and software engineering.
              </p>
            </div>
            <h3>
              <a href="mailto:kkrajput1198@gmail.com">kkrajput1198@gmail.com</a>
            </h3>

            <h3>
              <a href="tel:9411856388">9411856388</a>
            </h3>
            <h3>Bidhuna, U.P, India</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export { About };
