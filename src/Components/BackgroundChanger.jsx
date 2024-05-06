import React, { useState } from "react";
import "./Styles/backgroundchanger.css";
const BackgroundChanger = () => {
  const [color, setColor] = useState("#D0AEE4");
  const changeBackgroundColor = () => {
    const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += hexArray[Math.floor(Math.random() * 16)];
  }
  code = "#"+ code;
    setColor(code);
  };
  return (
    <>
      <p style={{color:"870D90"}}>{color}</p>
      <div
        className="background-changer-container"
        style={{ backgroundColor: color }}
      >
        <button onClick={changeBackgroundColor}> Click to change</button>
      </div>
    </>
  );
};

export default BackgroundChanger;
