import React from "react";
import "./About.css";
import { Experiance } from "./experiance/Experiance";
import { Footer } from "./footer/Footer";
import resume from "../assets/files/kamal_kishor_rajput.nodejs.pdf";

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
            <a href={resume} target="_blank" rel="noreferrer">
              Download Resume
            </a>
            <div>
              Want to Play Game <a href="/shooter">Click here</a>
            </div>
          </div>
        </div>
      </div>
      <Experiance />
    </div>
  );
};

export { About };
