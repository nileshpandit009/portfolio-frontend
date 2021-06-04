import React from "react";
import SkillItem from "./SkillItem";
import "./skills.css";
import { skills } from "./skills-data";

function Skills(props) {
  return (
    <div id={props.id} className="content-root">
      <div className="section-container">
        <span className="section-header-text">Skills</span>
        <div className="section-content-text skills-container">
          {skills.map((skill) => (
            <SkillItem skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
