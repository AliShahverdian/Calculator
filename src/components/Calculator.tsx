"use client";
import React, { useState } from "react";

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>("0");
  const [prevInput, setPrevInput] = useState<string>("");
  const [operator, setOperator] = useState<string | null>(null);

  const handleNumberClick = (value: string) => {
    setInput((prev) => (prev === "0" ? value : prev + value));
  };

  const handleOperatorClick = (op: string) => {
    setPrevInput(input);
    setInput("0");
    setOperator(op);
  };

  const handleClear = () => {
    setInput("0");
    setPrevInput("");
    setOperator(null);
  };

  const handleEquals = () => {
    if (!operator || !prevInput) return;

    const current = parseFloat(input);
    const previous = parseFloat(prevInput);

    let result = 0;
    switch (operator) {
      case "+":
        result = previous + current;
        break;
      case "-":
        result = previous - current;
        break;
      case "*":
        result = previous * current;
        break;
      case "/":
        result = previous / current;
        break;
    }

    setInput(result.toString());
    setPrevInput("");
    setOperator(null);
  };

  return (
    <div className="calculator bg-gray-100 max-w-xs mx-auto mt-20 shadow-lg rounded-lg p-6">
      <div className="screen bg-gray-900 text-white text-right text-4xl p-4 rounded mb-4">
        {input}
      </div>
      <div className="grid grid-cols-4 gap-4">
        <button
          onClick={handleClear}
          className="col-span-2 bg-red-500 p-4 text-white rounded"
        >
          AC
        </button>
        <button
          onClick={() => handleOperatorClick("/")}
          className="bg-blue-500 p-4 text-white rounded"
        >
          /
        </button>
        <button
          onClick={() => handleOperatorClick("*")}
          className="bg-blue-500 p-4 text-white rounded"
        >
          *
        </button>

        <button
          onClick={() => handleNumberClick("7")}
          className="bg-gray-300 p-4 rounded"
        >
          7
        </button>
        <button
          onClick={() => handleNumberClick("8")}
          className="bg-gray-300 p-4 rounded"
        >
          8
        </button>
        <button
          onClick={() => handleNumberClick("9")}
          className="bg-gray-300 p-4 rounded"
        >
          9
        </button>
        <button
          onClick={() => handleOperatorClick("-")}
          className="bg-blue-500 p-4 text-white rounded"
        >
          -
        </button>

        <button
          onClick={() => handleNumberClick("4")}
          className="bg-gray-300 p-4 rounded"
        >
          4
        </button>
        <button
          onClick={() => handleNumberClick("5")}
          className="bg-gray-300 p-4 rounded"
        >
          5
        </button>
        <button
          onClick={() => handleNumberClick("6")}
          className="bg-gray-300 p-4 rounded"
        >
          6
        </button>
        <button
          onClick={() => handleOperatorClick("+")}
          className="bg-blue-500 p-4 text-white rounded"
        >
          +
        </button>

        <button
          onClick={() => handleNumberClick("1")}
          className="bg-gray-300 p-4 rounded"
        >
          1
        </button>
        <button
          onClick={() => handleNumberClick("2")}
          className="bg-gray-300 p-4 rounded"
        >
          2
        </button>
        <button
          onClick={() => handleNumberClick("3")}
          className="bg-gray-300 p-4 rounded"
        >
          3
        </button>
        <button
          onClick={handleEquals}
          className="row-span-2 bg-green-500 p-4 text-white rounded"
        >
          =
        </button>

        <button
          onClick={() => handleNumberClick("0")}
          className="col-span-2 bg-gray-300 p-4 rounded"
        >
          0
        </button>
        <button
          onClick={() => handleNumberClick(".")}
          className="bg-gray-300 p-4 rounded"
        >
          .
        </button>
      </div>
    </div>
  );
};

export default Calculator;
