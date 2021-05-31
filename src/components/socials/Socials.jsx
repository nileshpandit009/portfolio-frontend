import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./socials.css";

function Socials(props) {
  return (
    <div className="socials">
      <a
        className="social-btn"
        target="_blank"
        href="https://github.com/nileshpandit009"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} size="lg" />
      </a>
      <a
        className="social-btn"
        target="_blank"
        href="https://www.linkedin.com/in/nileshpandit009"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} size="lg" />
      </a>
      <a
        className="social-btn"
        target="_blank"
        href="https://www.instagram.com/_o.pandit.ji_"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} size="lg" />
      </a>
    </div>
  );
}

export default Socials;
