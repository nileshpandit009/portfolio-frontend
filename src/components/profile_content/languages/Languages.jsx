import React from "react";
import LanguageItem from "./LanguageItem";
import "./languages.css";
import { languages } from "./languages-data";

function Languages(props) {
  return (
    <div id={props.id} className="content-root">
      <div className="section-container">
        <span className="section-header-text">Languages</span>
        <div className="section-content-text">
          {languages.map((lang) => (
            <LanguageItem lang={lang} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Languages;
