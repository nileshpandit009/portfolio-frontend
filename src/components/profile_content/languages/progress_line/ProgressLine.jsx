import React from "react";
import "./progress_line.css";

function ProgressLine({ percent }) {
  return (
    <div className="progress-line">
      <div className="percentage" style={{ width: `${percent}%` }}>
        <span className="percent">
          <span>{`${percent} %`}</span>
        </span>
      </div>
    </div>
  );
}

export default ProgressLine;
