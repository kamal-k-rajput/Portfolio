import React from "react";
import { Card } from "./Card";
import potterybarn from "../assets/img/projects/potterybarn.png";
import sugercosmetics from "../assets/img/projects/sugarcosmetics.png";
import './Project.css';
export const Projects = () => {
  const project = {
    data: [
      {
        name: "Potterybarn Clone",
        desc: "Potterybarn Clone is an e-commerce platform. Which allows the user to search the home furniture of different category & purchase them.",
        img: potterybarn,
        demoLink: "https://potterybarn-clone.netlify.app/",
        codeLink: "https://github.com/kamal-k-rajput/potterybarn_clone.git",
        techstack: [
          "/icons/material-ui.svg",
          "/icons/mongodb.svg",
          "/icons/express.svg",
          "/icons/nodejs-icon.svg",
        ],
      },
      {
        name: "Sugar Cosmetcs Clone",
        desc: "Sugar Cosmetcs is an online marketplace that sells beauty products.  ",
        img: sugercosmetics,
        demoLink: "https://sugar-cosmetic.netlify.app/",
        codeLink: "https://github.com/hrutugandha/Sugar_Cosmetics_Project.git",
        techstack: ["/icons/html-5.svg", "/icons/css-3.svg"],
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
