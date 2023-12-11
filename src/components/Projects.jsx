import React from "react";
import { Card } from "./Card";
import potterybarn from "../assets/img/projects/potterybarn.png";
import sugercosmetics from "../assets/img/projects/sugarcosmetics.png";
import expedia from "../assets/img/projects/expedia.png";
import yogm from "../assets/img/projects/yogm.png";
import dainik from "../assets/img/projects/dainik.png";

import "./Project.css";
export const Projects = () => {
  const project = {
    data: [
      {
        name: "Dainik School",
        desc: "Dainik school is a online school, provide tution from nursery to 8th. I am only person responsible for creating frontend, backend and deploying to aws.",
        img: dainik,
        demoLink: "https://main.d1298x39bwmltq.amplifyapp.com/",
        codeLink: "https://github.com/kamal-k-rajput/dainik_school_frontend",
        techstack: [
          "/icons/react.svg",
          "/icons/css-3.svg",
          "/icons/javascript.svg",
          "/icons/npm.svg",
          "/icons/bootstrap.svg",
          "/icons/nodejs-icon.svg",
        ],
      },
      {
        name: "Yogm Hospital",
        desc: "Yogm hospital provide healthcare service at two diffrent locations. ",
        img: yogm,
        demoLink: "https://www.yogmgroup.com",
        codeLink: "https://github.com/kamal-k-rajput/yogm_hospital.git",
        techstack: [
          "/icons/react.svg",
          "/icons/css-3.svg",
          "/icons/javascript.svg",
          "/icons/npm.svg",
          "/icons/bootstrap.svg",
          "/icons/nodejs-icon.svg",
        ],
      },
      {
        name: "Expedia Clone",
        desc: "Expedia is one of the fastest growing online travel portals in Asia, offering travellers an extensive selection of hotels, activities and travel services to meet every budget and activities of every kind at competitive rates..  ",
        img: expedia,
        demoLink: "https://expediacloneunit5.netlify.app/home",
        codeLink: "https://github.com/kamal-k-rajput/expedia-clone.git",
        techstack: [
          "/icons/react.svg",
          "/icons/css-3.svg",
          "/icons/javascript.svg",
          "/icons/npm.svg",
          "/icons/mongodb.svg",
          "/icons/bootstrap.svg",
          "/icons/nodejs-icon.svg",
          "/icons/express.svg",
        ],
      },
      {
        name: "Potterybarn Clone",
        desc: "Potterybarn Clone is an e-commerce platform. Which allows the user to search the home furniture of different category & purchase them.",
        img: potterybarn,
        demoLink: "https://potterybarn-clone.netlify.app/",
        codeLink: "https://github.com/kamal-k-rajput/potterybarn_clone.git",
        techstack: [
          "/icons/html-5.svg",
          "/icons/css-3.svg",
          "/icons/mongodb.svg",
          "/icons/express.svg",
          "/icons/nodejs-icon.svg",
          "/icons/javascript.svg",
        ],
      },
      {
        name: "Sugar Cosmetics Clone",
        desc: "Sugar Cosmetics is an online marketplace that sells beauty products.  ",
        img: sugercosmetics,
        demoLink: "https://sugar-cosmetic.netlify.app/",
        codeLink: "https://github.com/hrutugandha/Sugar_Cosmetics_Project.git",
        techstack: [
          "/icons/html-5.svg",
          "/icons/css-3.svg",
          "/icons/javascript.svg",
        ],
      },
    ],
  };
  return (
    <div className="project-container">
      <div id="projects" className="container width">
        <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
        <div className="row">
          {project.data.map((elem, index) => {
            return <Card key={index} data={elem} />;
          })}
        </div>
      </div>
    </div>
  );
};
