import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "./form.css";
import TextField from "./TextField";

function Form(props) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState({
    name: false,
    email: false,
    message: false,
  });

  const emailRE = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

  const validate = () => {
    const nameErr = form.name.length < 2;
    const emailErr = !emailRE.test(form.email);
    const messageErr = form.message.length < 25;
    setError({ name: nameErr, email: emailErr, message: messageErr });
    return !nameErr && !emailErr && !messageErr;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(form);
    } else {
      console.log("Form has errors");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-input-container">
        <TextField
          id="name-text-field"
          name="name"
          placeholder="Your full name"
          onChange={handleChange}
          error={error.name}
          errorMessage="Don't be shy. Tell me your name."
        />
        <TextField
          id="email-text-field"
          name="email"
          placeholder="Your email"
          onChange={handleChange}
          error={error.email}
          errorMessage="How am I supposed to contact you on this? Please enter a valid
          email address."
        />

        <TextField
          id="message-text-area"
          name="message"
          placeholder="Your message"
          onChange={handleChange}
          error={error.message}
          errorMessage="Care to elaborate? Message should be at least 25 characters long."
          textArea
        />
        {/* <textarea
          className={`form-input message-area${
            error.message ? " input-error" : ""
          }`}
          onChange={handleChange}
          id="message-text-area"
          name="message"
          multiple
          placeholder="Your message"
        />
        <span
          className="error-msg"
          style={{ display: `${error.message ? "block" : "none"}` }}
        >
          Care to elaborate? Message should be at least 25 characters long.
        </span> */}
        <button type="submit" id="submit-button">
          <FontAwesomeIcon id="submit-btn-icon" icon={faPaperPlane} size="lg" />
          {/* <img id="submit-btn-icon" src={sendBtnImg} /> */}
        </button>
      </div>
    </form>
  );
}

export default Form;
