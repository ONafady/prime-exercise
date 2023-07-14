import React, { useState } from "react";
import CounterDisplay from "./CounterDisplay";
import CounterButton from "./CounterButton";

function Counter() {
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the count
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <CounterDisplay count={count} />
      <CounterButton onIncrement={increment} onDecrement={decrement} />
    </div>
  );
}

export default Counter;
