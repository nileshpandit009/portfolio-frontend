import React from "react";
import Name from "./Name";
import Intro from "./Intro";
import "./profilecontent.css";
import About from "./about/About";
import Work from "./experience/work/Work";
import Contact from "./contact/Contact";
import Socials from "../socials/Socials";
import Education from "./experience/education/Education";
import Skills from "./skills/Skills";
import Languages from "./languages/Languages";

function ProfileContent(props) {
  return (
    <div className="content-root-wrapper">
      <div className="content-root vertical-center">
        <Name firstName="Nilesh" lastName="Pandit" />
        <Intro />
      </div>
      <About id="about" />
      <Work id="work" />
      <Education id="education" />
      <Skills id="skills" />
      <Languages id="languages" />
      <Contact id="contact" />
      <Socials />
    </div>
  );
}

export default ProfileContent;
