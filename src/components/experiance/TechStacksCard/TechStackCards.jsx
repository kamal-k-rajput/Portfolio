import React from "react";
import "./TechStackCards.css";
export const TechStackCards = ({ technology }) => {
  return (
    <div className="job-tech-stacks">
      {technology.map((tech, i) => {
        return <span key={i}>{tech}</span>;
      })}
    </div>
  );
};
