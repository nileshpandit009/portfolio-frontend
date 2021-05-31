import React from "react";
// import "../profilecontent.css";

function Work(props) {
  return (
    <div id={props.id} className="content-root">
      <div className="section-container">
        <span className="section-header-text">Work</span>
        <div className="section-content-text">
          Work goes here...
          <br />
          Layout not decided. Probably some kinda grid layout.
        </div>
      </div>
    </div>
  );
}

export default Work;
