import { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <h3>Focus on Input</h3>
      <input
        type="text"
        placeholder="Press button to focus me"
        value=""
        id="focus"
        ref={inputRef}
      />
      <button onClick={() => inputRef.current?.focus()}>Focus</button>
    </div>
  );
};
export default FocusInput;
