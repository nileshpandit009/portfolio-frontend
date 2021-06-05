import React from "react";
import "./experience.css";

function Experience({ data }) {
  const { name, location, year, description } = data;
  return (
    <div className="experience">
      <div className="resume-item">
        <span className="resume-item-duration">{year}</span>
        <div className="resume-item-name">
          <span>{name}</span>
          <br />
          <span>{location}</span>
        </div>
      </div>
      <div className="section-content-text">{description}</div>
    </div>
  );
}

export default Experience;
