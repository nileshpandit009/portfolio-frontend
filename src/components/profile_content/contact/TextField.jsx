import React from "react";

function TextField({
  id,
  name,
  placeholder,
  error,
  errorMessage,
  onChange,
  textArea,
}) {
  return (
    <div className="group-val">
      {textArea ? (
        <textarea
          className={`form-input message-area${error ? " input-error" : ""}`}
          onChange={onChange}
          id={id}
          name={name}
          multiple
          placeholder={placeholder}
        />
      ) : (
        <input
          className={`form-input${error ? " input-error" : ""}`}
          onChange={onChange}
          id={id}
          name={name}
          type="text"
          placeholder={placeholder}
        />
      )}

      <span
        className="error-msg"
        style={{ display: `${error ? "block" : "none"}` }}
      >
        {errorMessage}
      </span>
    </div>
  );
}

export default TextField;
