import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <h2>Counter App</h2>
      <button onClick={() => setCount(count - 1)}> — </button> {count}{" "}
      <button onClick={() => setCount(count + 1)}> + </button>
    </div>
  );
};
export default Counter;
