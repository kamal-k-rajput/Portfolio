import React from "react";
import "./Experiance.css";
import { ExperienceContainer } from "./ExperienceContainer";
import Skills from "../Skills";
import { Projects } from "../Projects";

export const Experiance = () => {
  const experiance = [
    {
      startYear: "2023",
      startMonth: "Oct",
      endYear: "",
      endMonth: "Present",
      companyName: "Taazaa Tech. Pvt. Ltd.",
      position: "Software Engineer",
      tech: [
        "Javascript",
        "Typescript",
        "NodeJs",
        "ExpressJs",
        "ReactJs",
        "PostgreSQL",
        "Mongodb",
        "RabbitMQ",
        "REST API",
        "NestJS",
        "GraphQL",
        "OOPs",
      ],
      summary: "",
      description: `Integrated third-party APIs to enhance application functionality and improve user experience, aligning with market demands for trip management and claim processing.`,
      bulletPoints: [
        "Implemented RabbitMQ for asynchronous communication between microservices, optimizing system efficiency and resource utilization.",
        "Demonstrated proficiency in various backend technologies, including SQL and NoSQL databases, ensuring robust data management and retrieval.",
        "We are responsible for presenting our work to US based client on weekly basis ensuring product feature and functionalities.",
        "Experience in working in agile methodology.",
      ],
      url: "https://www.taazaa.com",
    },
    {
      startYear: "2022",
      startMonth: "Oct",
      endYear: "2023",
      endMonth: "Oct",
      companyName: "Taazaa Tech. Pvt. Ltd.",
      position: "Associate Software Engineer",
      tech: [
        "Javascript",
        "Canvas",
        "CreateJs",
        "NodeJs",
        "ReactJs",
        "HTML5",
        "CSS3",
      ],
      description:
        "By adhering to OOP principles, we write clean, maintainable code. Over the past two years, we've maintained flawless production performance with zero failures.",
      bulletPoints: [
        "We utilize React.js to build modular, reusable components for frontend web pages, focusing on user interaction handling.",
        "Performance optimization to ensure a smooth UX.",
        "We modified createJs open source library as per our requirments.",
      ],
      url: "https://www.taazaa.com",
    },
  ];
  return (
    <div className="experiance">
      <h1>EXPERIENCE</h1>
      {experiance.map((details, i) => {
        return <ExperienceContainer details={details} key={i} />;
      })}
      <Skills />
      <Projects />
    </div>
  );
};
