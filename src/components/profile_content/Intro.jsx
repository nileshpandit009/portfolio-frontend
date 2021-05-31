import React from "react";
import TypeWriter from "./TypeWriter";
import "./profilecontent.css";

function Intro(props) {
  const greetings = ["Hello!", "नमस्ते!", "नमस्कार!", "Bonjour!", "Hola!"];
  return (
    <div className="section-container">
      <TypeWriter
        data={greetings}
        speed={150}
        className="section-header-text"
      />
      <div className="section-content-text">
        I am a full stack developer from India. I have experience in Lorem ipsum
        dolor sit amet consectetur adipisicing elit. A, vel? Eius enim dolores
        laboriosam magni, nesciunt dolorem. Officiis officia atque autem nostrum
        iusto possimus sunt alias, perspiciatis sit neque error.
      </div>
    </div>
  );
}

export default Intro;
