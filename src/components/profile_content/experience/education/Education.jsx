import React from "react";
import Experience from "../Experience";
import { education } from "./education-data";

function Education(props) {
  return (
    <div id={props.id} className="content-root">
      <div className="section-container">
        <span className="section-header-text">Education</span>
        {education.map((item) => (
          <Experience key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Education;
