import React from "react";
import "./Experiance.css";
import { ExperianceContainer } from "./ExperianceContainer";

export const Experiance = () => {
  const experiance = [
    {
      startYear: "2022",
      startMonth: "Oct",
      endYear: "",
      endMonth: "Present",
      companyName: "Taazaa Tech. Pvt. Ltd.",
      position: "Associate Software Engineer",
      tech: ["Javascript", "Canvas", "CreateJs", "NodeJs", "ReactJs"],
      description: "",
      url: "https://www.taazaa.com",
    },
  ];
  return (
    <div>
      {experiance.map((details, i) => {
        return <ExperianceContainer details={details} key={i} />;
      })}
    </div>
  );
};
