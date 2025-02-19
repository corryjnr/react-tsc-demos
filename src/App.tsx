import CounterContex from "./components/CounterContex";
import MyProvider from "./components/MyContex";

const App = () => {
  return (
    <div>
      <MyProvider>
        <CounterContex />
      </MyProvider>
    </div>
  );
};

export default App;
