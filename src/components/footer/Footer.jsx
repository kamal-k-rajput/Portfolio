import React from "react";
import "./Footer.css";
import "font-awesome/css/font-awesome.min.css";

const Footer = () => {
  return (
    <>
      <div >
        <div className="wrapper">
          <a
            href="https://twitter.com/kkrjpt"
            className="icon twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-twitter"></i>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=919068241331&text"
            className="icon what's app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-whatsapp"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/kamal-k-rajput/"
            className="icon linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/kamal-k-rajput"
            className="icon github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github"></i>
          </a>
        </div>
        {/* <div style={{ color: "white", marginLeft: "10px", padding: "10px" }}>
          Created By Kamal Kishor Rajput | © 2022. All Rights Reserved
        </div> */}
      </div>
    </>
  );
};

export { Footer };
