import React, { useState } from "react";
import Form from "./Form";

function Contact(props) {
  const [sent, setSent] = useState(false);

  return (
    <div id={props.id} className="content-root">
      <div className="section-container">
        <span className="section-header-text">Contact me</span>
        <div className="section-content-text">
          <Form sent={sent} setSent={setSent} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
