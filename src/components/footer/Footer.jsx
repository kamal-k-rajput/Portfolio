import React from "react";
import "./Footer.css";
import "font-awesome/css/font-awesome.min.css";

const Footer = () => {
  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <div className="wrapper">
          <a href="https://twitter.com/kkrjpt" className="icon twitter">
            <i className="fa fa-twitter"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/kamal-k-rajput/"
            className="icon linkedin"
          >
            <i class="fa fa-linkedin"></i>
          </a>
          <a href="https://github.com/kamal-k-rajput" className="icon github">
            <i className="fa fa-github"></i>
          </a>
        </div>
        <div style={{ color: "white", marginLeft: "10px" }}>
          Created By Kamal Kishor Rajput | © 2022. All Rights Reserved
        </div>
      </div>
    </>
  );
};

export { Footer };
