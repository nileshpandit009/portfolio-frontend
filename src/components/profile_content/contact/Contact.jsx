import React, { useState } from "react";
import ContactInfo from "./ContactInfo";
import Form from "./Form";
import "./contact.css";

function Contact(props) {
  const [sent, setSent] = useState(false);

  return (
    <div id={props.id} className="content-root">
      <div className="section-container">
        <span className="section-header-text">Contact me</span>
        <div className="section-content-text contact">
          <Form sent={sent} setSent={setSent} />
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}

export default Contact;
