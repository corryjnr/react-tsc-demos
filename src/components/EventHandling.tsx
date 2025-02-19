import { MouseEvent } from "react";

const EventHandling = () => {
  const handleMouseEnter = (event: MouseEvent<HTMLDivElement>) => {
    console.log("Mouse enter div", event.currentTarget);
  };
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked", event.currentTarget);
  };
  return (
    <div onMouseEnter={handleMouseEnter}>
      <h3>Event Handling</h3>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};
export default EventHandling;
