import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const incNum = () => {
    setNum(num + 1);
  };

  const decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      setNum(0);
      alert("the number can't go in negative");
    }
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1> {num} </h1>
          <div className="btn_div">
            <button onClick={incNum}>Increment</button>
            <button onClick={decNum}>Decrement</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;