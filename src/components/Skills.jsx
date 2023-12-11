import React from "react";
import { Image } from "react-bootstrap";

import {
  L_CREATEJS,
  L_CSS3,
  L_EXPRESS,
  L_GIT,
  L_GITHUB_PAGES,
  L_HEROKU,
  L_HTML5,
  L_JAVASCRIPT,
  L_MATERIALUI,
  L_MONGODB,
  L_NETLIFY,
  L_NODE_JS,
  L_POSTGRESQL,
  L_REACT,
  L_REACT_ROUTER,
  L_REDUX,
  L_TYPESCRIPT,
  L_VERCEL,
} from "../assets";
import "./Skills.css";

const Skills = () => {
  const skills = {
    frontend: [
      {
        link: "https://en.wikipedia.org/wiki/HTML5",
        imgAltText: "HTML 5",
        imgSrc: L_HTML5,
        skillName: "HTML5",
      },
      {
        link: "https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1",
        imgAltText: "CSS 3",
        imgSrc: L_CSS3,
        skillName: "CSS3",
      },
      {
        link: "https://www.javascript.com/",
        imgAltText: "JavaScript",
        imgSrc: L_JAVASCRIPT,
        skillName: "JavaScript",
      },
      {
        link: "https://reactjs.org/",
        imgAltText: "React JS",
        imgSrc: L_REACT,
        skillName: "React JS",
      },
      {
        link: "https://redux.js.org/",
        imgAltText: "Redux",
        imgSrc: L_REDUX,
        skillName: "Redux",
      },
      {
        link: "https://reacttraining.com/react-router/",
        imgAltText: "React Router",
        imgSrc: L_REACT_ROUTER,
        skillName: "React Router",
      },
      {
        link: "https://material-ui.com/",
        imgAltText: "Material-UI",
        imgSrc: L_MATERIALUI,
        skillName: "Material-UI",
      },
      {
        link: "https://createjs.com/",
        imgAltText: "CreateJs",
        imgSrc: L_CREATEJS,
        skillName: "CreateJs",
      },
    ],

    backend: [
      {
        link: "https://nodejs.org/en/",
        imgAltText: "Node.js",
        imgSrc: L_NODE_JS,
        skillName: "Node.js",
      },
      {
        link: "https://expressjs.com/",
        imgAltText: "Express",
        imgSrc: L_EXPRESS,
        skillName: "Express",
      },
    ],
    hostingPlatforms: [
      {
        link: "https://www.heroku.com/",
        imgAltText: "Heroku",
        imgSrc: L_HEROKU,
        skillName: "Heroku",
      },
      {
        link: "https://www.heroku.com/",
        imgAltText: "Vercel",
        imgSrc: L_VERCEL,
        skillName: "Vercel",
      },

      {
        link: "https://pages.github.com/",
        imgAltText: "GitHub Pages",
        imgSrc: L_GITHUB_PAGES,
        skillName: "GitHub Pages",
      },
      {
        link: "https://www.netlify.com/",
        imgAltText: "Netlify",
        imgSrc: L_NETLIFY,
        skillName: "Netlify",
      },
    ],
    programmingLanguages: [
      {
        link: "https://www.javascript.com/",
        imgAltText: "JavaScript",
        imgSrc: L_JAVASCRIPT,
        skillName: "JavaScript",
      },
      {
        link: "https://www.typescriptlang.org/",
        imgAltText: "TypeScript",
        imgSrc: L_TYPESCRIPT,
        skillName: "Typescript",
      },
    ],
    databases: [
      {
        link: "https://www.mongodb.com/",
        imgAltText: "MongoDB",
        imgSrc: L_MONGODB,
        skillName: "MongoDB",
      },
      {
        link: "https://www.postgresql.org/",
        imgAltText: "PostgresSQL",
        imgSrc: L_POSTGRESQL,
        skillName: "PostgresSQL",
      },
    ],
    versionControl: [
      {
        link: "https://git-scm.com/",
        imgAltText: "GIT",
        imgSrc: L_GIT,
        skillName: "GIT",
      },
    ],
  };
  return (
    <div id="skills">
      <hr></hr>

      <h1>Tech Skills</h1>
      <h3>Front end</h3>
      <div className="tech-skills">
        {skills.frontend.map((skill, index) => (
          <span className="p-1" key={index}>
            <a
              className="text-light text-decoration-none"
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={skill.imgSrc}
                alt={skill.imgAltText}
                rounded
                className="image-style m-3"
              ></Image>{" "}
              {skill.skillName}
            </a>
          </span>
        ))}
      </div>
      <hr></hr>
      <h3>Backend</h3>
      <div className="tech-skills">
        {skills.backend.map((skill, index) => (
          <span className="p-1" key={index}>
            <a
              className="text-light text-decoration-none"
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={skill.imgSrc}
                alt={skill.imgAltText}
                rounded
                className="image-style m-3"
              ></Image>{" "}
              {skill.skillName}
            </a>
          </span>
        ))}
      </div>
      <hr></hr>

      <h3>Hosting Plateforms</h3>
      <div className="tech-skills">
        {skills.hostingPlatforms.map((skill, index) => (
          <span className="p-1" key={index}>
            <a
              className="text-light text-decoration-none"
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={skill.imgSrc}
                alt={skill.imgAltText}
                rounded
                className="image-style m-3"
              ></Image>{" "}
              {skill.skillName}
            </a>
          </span>
        ))}
      </div>
      <hr></hr>

      <h3>Datebases</h3>
      <div className="tech-skills">
        {skills.databases.map((skill, index) => (
          <span className="p-1" key={index}>
            <a
              className="text-light text-decoration-none"
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={skill.imgSrc}
                alt={skill.imgAltText}
                rounded
                className="image-style m-3"
              ></Image>{" "}
              {skill.skillName}
            </a>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
