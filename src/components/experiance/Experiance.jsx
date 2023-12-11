import React from "react";
import "./Experiance.css";
import { ExperienceContainer } from "./ExperienceContainer";
import Skills from "../Skills";
import { Projects } from "../Projects";

export const Experiance = () => {
  const experiance = [
    {
      startYear: "2022",
      startMonth: "Oct",
      endYear: "",
      endMonth: "Present",
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
        "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship",
      url: "https://www.taazaa.com",
    },
    {
      startYear: "2022",
      startMonth: "Oct",
      endYear: "",
      endMonth: "Present",
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
        "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship",
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
