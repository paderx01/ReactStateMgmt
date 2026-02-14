import { useReducer } from "react";

function App() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch ((action, type)) {
        case "setName":
          return { ...state, name: action.payload };
      }
    },
    {
      names: [],
      name: "",
    },
  );
  return (
    <div className="App">
      <input
        type="text"
        value={state.name}
        onChange={(e) =>
          dispatch({ type: "SET_NAME", payload: e.target.value })
        }
      />
    </div>
  );
}

export default App;

//UseState below:

// import { useState } from "react";

// function NameList() {
//   const [list, setList] = useState(["Joe", "Jill", "Jack"]);
//   const [name, setName] = useState(() => "Pader");

//   const onAddName = () => {
//     setList([...list, name]);
//     setName("");
//   };

//   return (
//     <div>
//       <ul>
//         {list.map((name) => (
//           <li key={name}>{name}</li>
//         ))}
//       </ul>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <button onClick={onAddName}>Add Name</button>
//     </div>
//   );
// }

// function Counter() {
//   const [count, setCount] = useState(10);

//   function addOne() {
//     setCount(count + 1);
//   }

//   return (
//     <div className="App">
//       <button onClick={addOne}> Count = {count}</button>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Counter />
//       <NameList />
//     </div>
//   );
// }

// export default App;
