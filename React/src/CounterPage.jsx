import React from "react";
import { useCounter } from "./CounterContext.jsx";

const CounterPage = () => {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div>
      <h2>Context Counter</h2>
      <p>Count: {count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CounterPage;
