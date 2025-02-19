import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };
  return (
    <div>
      <br />
      <h3>To-do List</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter to-do item"
        />
        <button type="submit">Add to-do</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
