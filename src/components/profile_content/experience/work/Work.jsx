import React from "react";
import Experience from "../Experience";
import { experiences } from "./work-experiences";

function Work(props) {
  return (
    <div id={props.id} className="content-root">
      <div className="section-container">
        <span className="section-header-text">Work</span>
        {experiences.map((company) => (
          <Experience key={company.id} data={company} />
        ))}
      </div>
    </div>
  );
}

export default Work;
