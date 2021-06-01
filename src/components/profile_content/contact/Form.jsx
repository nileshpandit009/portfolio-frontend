import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "./form.css";
import TextField from "./TextField";
import { sendEmail } from "../../../service/mailer.service";

function Form({ sent, setSent }) {
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
      sendEmail(form.name, form.email, form.message)
        .then((resp) => {
          setSent(true);
          e.target.reset();
        })
        .catch((err) => setSent(false));
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
        <button disabled={sent} type="submit" id="submit-button">
          <FontAwesomeIcon id="submit-btn-icon" icon={faPaperPlane} size="lg" />
        </button>
      </div>
    </form>
  );
}

export default Form;
