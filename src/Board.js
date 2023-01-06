import React from "react";

const Board = ({ inputDisplay, result }) => {
  return (
    <div id="board">
      <div id="display">{inputDisplay || 0}</div>
      <div id="resultDisplay">{result}</div>
    </div>
  );
};

export default Board;
