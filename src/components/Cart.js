import React from "react";
import "./cart.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Cart() {
  const [counter, setCounter] = useState(0);

  const handleClick1 = () => {
    setCounter(counter + 1);
  };

  const handleClick2 = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <div className="cart">
        <p>Quantity : {counter}</p>
        <button onClick={handleClick1}>+1</button>
        <button onClick={handleClick2}>-1</button>

        <Link to="/">
          <button className="btn1">Back</button>
        </Link>
        <button className="btn2">Buy</button>
      </div>
    </>
  );
}