import React from "react";
import Form from "./Form";

function Contact(props) {
  return (
    <div id={props.id} className="content-root">
      <div className="section-container">
        <span className="section-header-text">Contact me</span>
        <div className="section-content-text">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Contact;
