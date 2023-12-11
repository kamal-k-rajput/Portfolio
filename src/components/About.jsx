import React from "react";
import "./About.css";
import { Experiance } from "./experiance/Experiance";
import { Footer } from "./footer/Footer";

const About = () => {
  return (
    <div className="about-experence-container">
      <div className="about-container">
        <div>
          <h1>KAMAL KISHOR RAJPUT</h1>
        </div>
        <div>
          <div className="personal-details">
            I am currently working as a software engineer at TAAZAA TECH PVT
            LTD. in Noida. I am passionate about solving real-world problems and
            actively learning new tools and technologies in the field of web
            development and software engineering.
            <Footer />
          </div>
        </div>
      </div>
      <Experiance />
    </div>
  );
};

export { About };
