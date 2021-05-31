import React, { useEffect, useState } from "react";

function TypeWriter({ data, speed, className }) {
  const CONSTANTS = {
    DELETING_SPEED: 50,
    TYPING_SPEED: speed,
  };

  const [state, setState] = useState({
    text: "",
    message: "",
    isDeleting: false,
    loopNum: 0,
    typingSpeed: 100,
  });

  useEffect(() => {
    let timer = "";
    const handleType = () => {
      setState((cs) => ({
        ...cs,
        text: getCurrentText(cs),
        typingSpeed: getTypingSpeed(cs),
      }));
      timer = setTimeout(handleType, state.typingSpeed);
    };

    handleType();

    return () => clearTimeout(timer);
  }, [state.isDeleting]);

  useEffect(() => {
    if (!state.isDeleting && state.text === state.message) {
      setTimeout(() => {
        setState((cs) => ({
          ...cs,
          isDeleting: true,
        }));
      }, 1000);
    } else if (state.isDeleting && state.text === "") {
      setState((cs) => ({
        ...cs,
        isDeleting: false,
        loopNum: cs.loopNum + 1,
        message: getMessage(cs, data),
      }));
    }
  }, [state.text, state.message, state.isDeleting, data]);

  function getCurrentText(currentState) {
    return currentState.isDeleting
      ? currentState.message.substring(0, currentState.text.length - 1)
      : currentState.message.substring(0, currentState.text.length + 1);
  }

  function getMessage(currentState, data) {
    return data[Number(currentState.loopNum) % Number(data.length)];
  }

  function getTypingSpeed(currentState) {
    return currentState.isDeleting
      ? CONSTANTS.TYPING_SPEED
      : CONSTANTS.DELETING_SPEED;
  }

  return (
    <div className={className}>
      <span>{state.text}</span>
      <span>|</span>
    </div>
  );
}

export default TypeWriter;
