import { useReducer } from "react";

type Action = { type: "INCREMENT" } | { type: "DECREMENT" };
type State = { count: number };
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h2> Counter </h2>
      <button onClick={() => dispatch({ type: "DECREMENT" })}> — </button>{" "}
      {state.count}{" "}
      <button onClick={() => dispatch({ type: "INCREMENT" })}> + </button>
    </div>
  );
};
export default Counter;
