import React from "react";
import "../profilecontent.css";

function About(props) {
  return (
    <div id={props.id} className="content-root">
      <div className="section-container">
        <span className="section-header-text">About me</span>
        <div className="section-content-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
          doloremque voluptas alias a saepe optio debitis, porro facilis neque,
          consequuntur nisi totam unde error quia, consequatur odit repudiandae
          libero in! Nulla nam laborum hic quis vitae distinctio vel impedit,
          eius et at modi sint, mollitia vero doloremque provident, soluta illo
          enim? Dolore sit dignissimos optio exercitationem, architecto
          distinctio autem deserunt! Quam, possimus. Atque ratione incidunt fuga
          dolores, eum cupiditate quisquam aperiam alias animi nihil eveniet
          vero accusamus maiores libero accusantium, quia quaerat voluptatem
          officiis quod totam iste. Voluptates, maxime. Maiores.
        </div>
      </div>
    </div>
  );
}

export default About;
