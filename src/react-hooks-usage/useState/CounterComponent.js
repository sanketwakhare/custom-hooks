import React, { useState } from "react";

export const CounterComponent = () => {
  const [count, setCount] = useState(() => 30);

  const handleIncrement = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };

  const handleDecrement = () => {
    setCount((prevCount) => {
      return prevCount - 1;
    });
  };

  return (
    <div className="box--component">
      <h3>useState</h3>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>
      <p>Count {count} </p>
    </div>
  );
};
