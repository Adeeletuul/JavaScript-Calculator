import React from "react";

const Button = ({ value, id, handleClick }) => {
  return (
    <button id={id} value={value} onClick={handleClick}>
      {value}
    </button>
  );
};

export default Button;
