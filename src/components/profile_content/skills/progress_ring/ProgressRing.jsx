import React from "react";
import "./progress.css";

function ProgressRing({ percent }) {
  // DO NOT CHANGE THE RADIUS. It f**ks up the circle.
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;
  return (
    <svg className="progress-ring" width="120" height="120">
      <g>
        <circle
          style={{
            strokeDasharray: `${circumference} ${circumference}`,
            strokeDashoffset: offset,
          }}
          className="progress-ring__circle"
          stroke="var(--text-secondary)"
          strokeWidth="2"
          fill="transparent"
          r={radius}
          cx="60"
          cy="60"
        />
        <text x="60" y="60" textAnchor="middle">
          <tspan
            dx="5"
            dy="5"
            fontWeight="400"
            fontSize="1em"
            fill="var(--text-secondary)"
          >{`${percent} %`}</tspan>
        </text>
      </g>
    </svg>
  );
}

export default ProgressRing;
