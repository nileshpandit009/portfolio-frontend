import React from "react";
import ProgressRing from "./progress_ring/ProgressRing";

function SkillItem({ skill }) {
  const { name, percent, description } = skill;
  return (
    <div className="skill-item">
      <ProgressRing percent={percent} />
      <h3>{name}</h3>
      <p style={{ width: "160px", margin: "auto" }}>{description}</p>
    </div>
  );
}

export default SkillItem;
