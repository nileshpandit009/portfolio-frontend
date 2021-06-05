import React from "react";
import "./circular_progress.css";

function CircularProgress({ size = "md", hidden = false }) {
  const SIZE = 44;
  const thickness = 3.6;

  let wh = 0;
  switch (size) {
    case "sm":
      wh = 1;
      break;
    case "md":
      wh = 2;
      break;
    case "lg":
      wh = 3;
      break;
    case "xl":
      wh = 4;
      break;
  }

  return (
    <div
      className="progress-root"
      style={{ width: `${wh}rem`, height: `${wh}rem` }}
      hidden={hidden}
    >
      <svg
        className="circular-progress"
        viewBox={`${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`}
      >
        <circle
          className="circular-shrink"
          stroke="var(--text-secondary)"
          strokeWidth={thickness}
          fill="transparent"
          r={(SIZE - thickness) / 2}
          cx={SIZE}
          cy={SIZE}
        />
      </svg>
    </div>
  );
}

export default CircularProgress;
