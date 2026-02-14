import { useState } from "react";

function Counter() {
  let [count, setCount] = useState(10);

  function addOne() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <button onClick={addOne}> Count = {count}</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
