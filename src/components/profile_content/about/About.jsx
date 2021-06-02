import React from "react";
import "../profilecontent.css";

function About(props) {
  return (
    <div id={props.id} className="content-root">
      <div className="section-container">
        <span className="section-header-text">About me</span>
        <div className="section-content-text">
          So, it started when I was a kid and used my computer only to play
          Counter-Strike. Later, I realized that I could do a lot more with
          computers than just play games.
          <br />
          I wrote my first "Hello, world!" program in C when I was 14 and then
          began my journey as a software developer.
          <br />
          Now, I build robust, efficient, and scalable backend and RESTful APIs
          in Java and Ruby, with a unique skill of designing user-friendly
          interfaces in ReactJS which run as smooth as a knife on butter.
        </div>
      </div>
    </div>
  );
}

export default About;
