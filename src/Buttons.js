import React from "react";
import Button from "./Button";

const clearButton = {
  clear: "AC",
};

const numberButtons = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
  zero: "0",
};

const decimalButton = {
  decimal: ".",
};

const operatorButtons = {
  add: "+",
  subtract: "-",
  multiply: "*",
  divide: "/",
};

export const generalOperationButtons = ["+", "*", "/"];

const equalsButton = {
  equals: "=",
};

const Buttons = ({
  handleNumber,
  handleOperator,
  handleDecimal,
  handleClear,
  getResult,
  displayResult,
}) => {
  const handleClick = (e) => {
    const value = e.target.value;
    if (value === "=") {
      displayResult();
    } else if (value === "AC") {
      handleClear();
    } else if (Object.values(numberButtons).includes(value)) {
      console.log(value);
      handleNumber(value);
    } else if (Object.values(operatorButtons).includes(value)) {
      handleOperator(value);
    } else if (value === ".") {
      handleDecimal(value);
    }
  };

  return (
    <div id="buttons">
      <div id="firstRow">
        <Button
          id="clear"
          value={clearButton.clear}
          handleClick={handleClick}
        />
        <Button
          id="divide"
          value={operatorButtons.divide}
          handleClick={handleClick}
        />
        <Button
          id="multiply"
          value={operatorButtons.multiply}
          handleClick={handleClick}
        />
      </div>
      <div id="middleButtons">
        <div id="numberButtons">
          {Object.entries(numberButtons).map(([key, value]) => (
            <Button
              key={key}
              id={key}
              value={value}
              handleClick={handleClick}
            />
          ))}
          <Button
            id="decimal"
            value={decimalButton.decimal}
            handleClick={handleClick}
          />
        </div>
        <div id="sideButtons">
          <Button
            id="subtract"
            value={operatorButtons.subtract}
            handleClick={handleClick}
          />
          <Button
            id="add"
            value={operatorButtons.add}
            handleClick={handleClick}
          />
          <Button
            id="equals"
            value={equalsButton.equals}
            handleClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Buttons;
