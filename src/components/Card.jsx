import React from "react";
import "./Card.css";

const Card = ({ data }) => {
  return (
    <div>
      <div>
        <img src={data.img} className="img-fluid border project-image" alt="" />
        <h4 className="text-center my-2 font-weight-bold">{data.name}</h4>
        <p className="px-2 text-center">{data.desc}</p>

        <a
          className="btn btn-outline-dark btn-block btn-sm"
          href={data.demoLink}
          target="_blank"
          rel="noreferrer"
        >
          Live
        </a>
        <a
          className="btn btn-outline-dark btn-block btn-sm"
          href={data.demoLink}
          target="_blank"
          rel="noreferrer"
        >
          Live
        </a>
        <a
          className="btn btn-outline-dark btn-block btn-sm"
          href={data.codeLink}
          target="_blank"
          rel="noreferrer"
        >
          Github Code
        </a>
        {data.techstack.map((elem, index) => (
          <img
            key={index}
            src={elem}
            width="32px"
            className="img-fluid mx-2 d-inline-block"
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export { Card };
