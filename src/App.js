import React, { useState } from "react";
import "./App.css";

function App() {
  const [answer, setAnswer] = useState("0");
  const [expr, setExpr] = useState("");
  const buttons = [
    { name: "9", value: "9" },
    { name: "8", value: "8" },
    { name: "7", value: "7" },
    { name: "+", value: "+" },
    { name: "6", value: "6" },
    { name: "5", value: "5" },
    { name: "4", value: "4" },
    { name: "-", value: "-" },
    { name: "3", value: "3" },
    { name: "2", value: "2" },
    { name: "1", value: "1" },
    { name: "/", value: "/" },
    { name: "0", value: "0" },
    { name: "AC", value: "ac" },
    { name: "=", value: "=" },
    { name: "x", value: "*" },
  ];
  const handleButtonClick = (value) => {
    if (value === "ac") {
      setExpr("");
    } else if (value === "=") {
      // eslint-disable-next-line no-eval
      const ans = eval(expr);
      setAnswer("Ans." + ans);
      setExpr(ans);
    } else {
      setExpr(expr + value);
    }
  };
  return (
    <div className="App">
      <div className="calculator">
        <textarea value={`${answer}\n${expr}`} id="screen" readOnly></textarea>
        <div className="buttons">
          {buttons.map((btn, i) => (
            <button
              key={i}
              onClick={() => {
                handleButtonClick(btn.value);
              }}
            >
              {btn.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
