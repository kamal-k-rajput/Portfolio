import React from "react";
import { Row, Col, Card, Image } from "react-bootstrap";

import "./Skills.css";
import {
  L_CSS3,
  L_HTML5,
  L_CREATEJS,
  L_EXPRESS,
  L_GIT,
  L_GITHUB_PAGES,
  L_HEROKU,
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
        imgAltText: "PostgreSQL",
        imgSrc: L_POSTGRESQL,
        skillName: "PostgreSQL",
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
    <div className="skill-container">
      <div className="pt-3 pb-3 width-container" id="skills">
        <h1 className="text-center font-details-b pb-4">TECH SKILLS</h1>
        {/* <CardDeck> */}
        <Row className="d-flex justify-content-around">
          {/* Frontend */}
          <Col md={4}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                {/* Frontend */}
                <Card.Title className="text-center  card-title">
                  Frontend
                </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.frontend.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a
                        className="text-dark text-decoration-none"
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={skill.imgSrc}
                          alt={skill.imgAltText}
                          rounded
                          className="image-style m-1"
                        ></Image>{" "}
                        {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Backend */}
          <Col md={4}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">
                  Backend
                </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.backend.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a
                        className="text-dark text-decoration-none"
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={skill.imgSrc}
                          alt={skill.imgAltText}
                          rounded
                          className="image-style m-1"
                        ></Image>{" "}
                        {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Hosting Platforms */}
            <Card className="focus mt-2 mb-2 ">
              <Card.Body>
                <Card.Title className="text-center  card-title">
                  Hosting Platforms
                </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.hostingPlatforms.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a
                        className="text-dark text-decoration-none"
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={skill.imgSrc}
                          alt={skill.imgAltText}
                          rounded
                          className="image-style m-1"
                        ></Image>{" "}
                        {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Programming Languages */}
          <Col md={4}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">
                  Programming Languages
                </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.programmingLanguages.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a
                        className="text-dark text-decoration-none"
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={skill.imgSrc}
                          alt={skill.imgAltText}
                          rounded
                          className="image-style m-1"
                        ></Image>{" "}
                        {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Database */}

            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">
                  Database
                </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.databases.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a
                        className="text-dark text-decoration-none"
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={skill.imgSrc}
                          alt={skill.imgAltText}
                          rounded
                          className="image-style m-1"
                        ></Image>{" "}
                        {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
            {/* Version Control */}

            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">
                  Version <br /> Control{" "}
                </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  <span className="p-2">
                    <a
                      className="text-dark text-decoration-none"
                      href={skills.versionControl[0].link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={skills.versionControl[0].imgSrc}
                        alt={skills.versionControl[0].imgAltText}
                        rounded
                        className="image-style m-1"
                      ></Image>{" "}
                      {skills.versionControl[0].skillName}
                    </a>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Skills;
