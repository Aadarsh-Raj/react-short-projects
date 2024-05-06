import React, { useState } from "react";
import "./Styles/counter.css";
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="counter-container">
      <div className="counter-display-container">{count}</div>
      <div className="counter-controller-container">
        <button className="counter-decreament-btn"onClick={()=>setCount((prev)=>prev-1)}>-</button>
        <button className="counter-increament-btn" onClick={()=>setCount((prev)=>prev+1)}>+</button>
        <button onClick={()=>setCount(0)}>Reset</button>
      </div>
      </div>
    </>
  );
};

export default Counter;
