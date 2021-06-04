import React from "react";

function InfoPair({ name, value }) {
  return (
    <div className="pair">
      <span className="name">{`${name}: `}</span>
      <span className="value">{value}</span>
    </div>
  );
}

export default InfoPair;
