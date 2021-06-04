import React from "react";
import ProgressLine from "./progress_line/ProgressLine";

function LanguageItem({ lang }) {
  const { name, percent } = lang;
  return (
    <div className="language-item">
      <h3>{name}</h3>
      <ProgressLine percent={percent} />
    </div>
  );
}

export default LanguageItem;
