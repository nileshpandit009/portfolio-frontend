import React from "react";
import "./name.css";

function Name({ firstName, lastName }) {
  return (
    <section id="profile-name">
      <h1>
        <span>
          {firstName} <br /> {lastName}
        </span>
      </h1>
    </section>
  );
}

export default Name;
