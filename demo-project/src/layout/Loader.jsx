import React from "react";
import "./loader.css";

const TypingLoader = ({ userTyping }) => {
  return (
    <div className='typing-indicator'>
      {/* {userTyping && (
        <>
          <p>Someone is typing</p>
          <div className="typing-dots">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </>
      )} */}
    </div>
  );
};

export { TypingLoader };
