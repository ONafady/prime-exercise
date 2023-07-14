import React from "react";
import "../styles/CounterDisplay.css";

function CounterDisplay({ count }) {
  // Determine the color based on the count value
  const getColor = () => {
    if (count <= 10) {
      return "green"; // Display green for counts <= 10
    } else if (count <= 20) {
      return "blue"; // Display blue for counts <= 20
    } else {
      return "red"; // Display red for counts > 20
    }
  };

  return (
    <p className="counter-display" style={{ color: getColor() }}>
      Current Count: {count}
    </p>
  );
}

export default CounterDisplay;
