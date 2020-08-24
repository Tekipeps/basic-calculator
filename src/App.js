import React, { useState } from "react";
import "./App.css";

function App() {
  const [answer, setAnswer] = useState("0");
  const [expr, setExpr] = useState("");
  const [error, setError] = useState(null);
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
      setAnswer("0");
    } else if (value === "=") {
      try {
        // eslint-disable-next-line no-eval
        const ans = eval(expr);
        // console.log(typeof ans);
        // console.log(ans);
        if (ans === Infinity) {
          setAnswer("Error division by 0");
          setExpr("");
        } else {
          setAnswer("Ans." + ans);
          setExpr(ans);
        }
      } catch (error) {
        setError(`${error}`);
        window.setTimeout(() => {
          setError(null);
        }, 3000);
      }
    } else {
      setExpr(expr + value);
    }
  };
  console.log(error);
  return (
    <div className="App">
      {error ? <div className="error">{error}</div> : null}
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
