import React from "react";
import "../styles/CounterButton.css";

function CounterButton({ onIncrement, onDecrement }) {
  return (
    <div>
      <button onClick={onIncrement} className="increment-button">
        +
      </button>
      <button onClick={onDecrement} className="decrement-button">
        -
      </button>
    </div>
  );
}

export default CounterButton;
