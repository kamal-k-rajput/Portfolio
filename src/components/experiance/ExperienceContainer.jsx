import React from "react";
import "./ExperianceContainer.css";
import { TechStackCards } from "./TechStacksCard/TechStackCards";
export const ExperienceContainer = ({ details }) => {
  return (
    <div>
      <div className="experience-container">
        <div className="month-year">
          <span>
            {details.startMonth} {details.startYear}
          </span>
          -
          <span>
            {details.endMonth} {details.endYear}
          </span>
        </div>
        <div className="experience-details">
          <div className="company-name">{details.companyName}</div>
          <div className="job-position">{details.position}</div>
          <div className="job-description">{details.description}</div>
          <TechStackCards technology={details.tech} />
        </div>
      </div>
    </div>
  );
};
