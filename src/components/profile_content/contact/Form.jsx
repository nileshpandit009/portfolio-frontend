import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "./form.css";
import TextField from "./TextField";
import { sendEmail } from "../../../service/mailer.service";
import CircularProgress from "./circular_progress/CircularProgress";

function Form(props) {
  const [disabled, setDisabled] = useState(false);
  const [hideMsg, setHideMsg] = useState(true);
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
      setDisabled(true);
      sendEmail(form.name, form.email, form.message)
        .then((resp) => {
          console.log("Email sent!");
          setHideMsg(false);
          e.target.reset();
        })
        .catch((err) => console.log("Could not send email"))
        .finally(() => {
          setTimeout(() => {
            setHideMsg(true);
          }, 3000);
          setDisabled(false);
          // setTimeout(() => {
          // }, 10000);
        });
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
        <span hidden={hideMsg} className="message-sent">
          Message sent!
        </span>
        <CircularProgress
          size="md"
          className="message-sent"
          hidden={!disabled}
        />
        <button disabled={disabled} type="submit" id="submit-button">
          <FontAwesomeIcon
            id="submit-btn-icon"
            icon={faPaperPlane}
            size="lg"
            disabled={disabled}
          />
        </button>
      </div>
    </form>
  );
}

export default Form;
