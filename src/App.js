import Buttons from "./Buttons";
import Board from "./Board";
import { generalOperationButtons } from "./Buttons";
import { useState } from "react";

function App() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [inputDisplay, setInputDisplay] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  const handleNumber = (value) => {
    if (operator === "") {
      if (value === "0" && firstNumber === "0") {
        setInputDisplay(inputDisplay);
        setFirstNumber(firstNumber);
      } else {
        if (result) {
          setInputDisplay(value);
          setFirstNumber(value);
          setResult("");
        } else {
          setInputDisplay(inputDisplay + value);
          setFirstNumber(firstNumber + value);
        }
      }
    } else {
      if (value === "0" && secondNumber === "0") {
        setInputDisplay(inputDisplay);
        setSecondNumber(secondNumber);
      } else {
        setInputDisplay(inputDisplay + value);
        setSecondNumber(secondNumber + value);
      }
    }
  };

  const handleOperator = (value) => {
    if (
      value === "-" &&
      generalOperationButtons.includes(
        inputDisplay.charAt(inputDisplay.length - 1)
      )
    ) {
      handleNumber(value);
    } else if (value === "-" && !inputDisplay) {
      handleNumber(value);
    } else if (!operator) {
      setInputDisplay(inputDisplay + value);
      setOperator(value);
    } else {
      setOperator(value);
      setInputDisplay(inputDisplay + value);
      if (!secondNumber) {
        return;
      }
      getResult(firstNumber, secondNumber, operator, true);
    }
  };

  const handleDecimal = (value) => {
    if (operator === "") {
      if (firstNumber.includes(".")) {
        return;
      } else {
        setInputDisplay(inputDisplay + value);
        setFirstNumber(firstNumber + value);
      }
    } else {
      if (secondNumber.includes(".")) {
        return;
      } else {
        setInputDisplay(inputDisplay + value);
        setSecondNumber(secondNumber + value);
      }
    }
  };

  const getResult = (
    firstNumberArg,
    secondNumberArg,
    operatorArg,
    keepOp = false
  ) => {
    const firstInt = parseFloat(firstNumberArg || 0);
    const secondInt = parseFloat(secondNumberArg) || 1;
    let result;
    if (!firstInt || !secondInt) {
      result = firstInt;
    } else {
      switch (operatorArg) {
        case "+":
          result = firstInt + secondInt;
          break;
        case "-":
          result = firstInt - secondInt;
          break;
        case "*":
          result = firstInt * secondInt;
          break;
        case "/":
          result = firstInt / secondInt;
          break;
        default:
          break;
      }
    }
    setFirstNumber(result.toString());
    setResult(result);
    setSecondNumber("");
    if (!keepOp) {
      setOperator("");
      setInputDisplay(result);
    }
  };

  const displayResult = () => {
    getResult(firstNumber, secondNumber, operator);
  };

  const handleClear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperator("");
    setResult("0");
    setInputDisplay("");
  };

  return (
    <div id="calculator">
      <Board
        result={result}
        firstNumber={firstNumber}
        secondNumber={secondNumber}
        operator={operator}
        inputDisplay={inputDisplay}
      />
      <Buttons
        handleNumber={handleNumber}
        handleOperator={handleOperator}
        handleDecimal={handleDecimal}
        handleClear={handleClear}
        displayResult={displayResult}
      />
    </div>
  );
}

export default App;
