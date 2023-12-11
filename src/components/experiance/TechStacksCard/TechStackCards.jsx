import React from "react";
import "./TechStackCards.css";
export const TechStackCards = ({ technology }) => {
  console.log(technology, "tech");
  return (
    <div className="job-tech-stacks">
      {technology.map((tech, i) => {
        return <span key={i}>{tech}</span>;
      })}
    </div>
  );
};