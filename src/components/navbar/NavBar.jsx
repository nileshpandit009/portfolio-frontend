import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function NavBar(props) {
  const [hover, setHover] = useState(false);
  const [bgColor, setBgColor] = useState(false);

  const toggleHover = () => {
    setHover(!hover);
  };

  const changeBgColor = () => {
    if (window.scrollY >= 80) setBgColor(true);
    else setBgColor(false);
  };

  window.addEventListener("scroll", changeBgColor);

  return (
    <>
      <div
        id="navbar-container"
        className={`${hover ? "active" : ""}${bgColor ? " bg-color" : ""}`}
      >
        <img
          src={logo}
          alt="logo"
          style={{
            width: "30px",
            margin: "0 2em",
          }}
        />
        <ul id="navbar-ul">
          <li>
            <a
              className={`nav-link${hover ? " active" : ""}`}
              href="#home"
              onClick={toggleHover}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className={`nav-link${hover ? " active" : ""}`}
              href="#about"
              onClick={toggleHover}
            >
              About
            </a>
          </li>
          <li>
            <a
              className={`nav-link${hover ? " active" : ""}`}
              href="#work"
              onClick={toggleHover}
            >
              Work
            </a>
          </li>
          <li>
            <a
              className={`nav-link${hover ? " active" : ""}`}
              href="#contact"
              onClick={toggleHover}
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="menu-btn" onClick={toggleHover}>
          {!hover ? (
            <FontAwesomeIcon icon={faBars} size="lg" />
          ) : (
            <FontAwesomeIcon icon={faTimes} size="lg" />
          )}
        </div>
      </div>
    </>
  );
}

export default NavBar;
