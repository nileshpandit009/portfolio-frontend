import React, { useState } from "react";
import TypeWriter from "./TypeWriter";
import "./profilecontent.css";
import "./intro.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Intro(props) {
  const greetings = ["Hello!", "नमस्ते!", "नमस्कार!", "Bonjour!", "Hola!"];
  const [hidden, setHidden] = useState(false);

  const hideAboutBtn = () => {
    setHidden(window.scrollY >= 150);
  };

  window.addEventListener("scroll", hideAboutBtn);

  return (
    <div className="section-container">
      <TypeWriter
        data={greetings}
        speed={150}
        className="section-header-text"
      />
      <div className="section-content-text">
        I am a full stack developer and my goal is to build things that make a
        difference.
        <br />I love to talk about tech.{" "}
        <a id="get-in-touch" href="#contact">
          Get in touch
        </a>{" "}
        if you too!
        <div
          className="about-me-btn-container"
          style={{ visibility: `${hidden ? "hidden" : "visible"}` }}
        >
          <a href="#about" className="about-me-btn">
            <FontAwesomeIcon className="icon" icon={faChevronDown} size="lg" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Intro;
