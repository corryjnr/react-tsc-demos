import { FC, useContext } from "react";
import { MyContext } from "./MyContex";

const CounterContex: FC = () => {
  const { count, increment, decrement } = useContext(MyContext);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
export default CounterContex;
