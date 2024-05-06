import React, { useState } from "react";
import "./Styles/guessthenumber.css"
const GuessTheNumber = () => {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100));
  const [checkStatus, setCheckStatus] = useState("");
  const [enteredNumber, setEnteredNumber] = useState(0);
    const [check, setCheck] = useState(false);
  const checkNumber = () => {
    if (enteredNumber == number) {
      setCheckStatus("You have got it");
        setCheck(true);
    } else if (enteredNumber < number) {
      setCheckStatus("Your number is smaller");
    } else {
      setCheckStatus("Your number is larger");
    }
  };
  const getEnteredNumber = (e) => {
    if (e.target.value >= 100 || e.target.value <= 0) {
      setCheckStatus("Enter a number between 0 to 100");
    }
    if (e.target.value === "") {
      setCheckStatus("");
    }
    setEnteredNumber(e.target.value);
  };
  const reset = () =>{
    setCheck(false);
    setNumber(Math.floor(Math.random() * 100))
  }
  return (
    <>
      <div className="guess-the-number-container">
        <div className="header-container">
          Guess a number between 0 to 100 
        </div>
        <input
          type="text"
          onChange={getEnteredNumber}
          placeholder="Guess A number"
        />
        <button onClick={() =>reset() }>
          Reset
        </button>
        <button onClick={checkNumber} disabled={check}>Check</button>
        <p> {checkStatus}</p>
      </div>
    </>
  );
};

export default GuessTheNumber;
