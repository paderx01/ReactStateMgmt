function App() {
  return <div></div>;
}

export default App;

//user reducer//
// function UserForm() {
//   const [state, dispatch] = useReducer(
//     (state, action) => ({
//       ...state,
//       ...action,
//     }),
//     {
//       first: "",
//       last: "",
//     },
//   );
//   return (
//     <div>
//       <input
//         type="text"
//         value={state.first}
//         onChange={(e) => dispatch({ first: e.target.value })}
//       />
//       <div>First: {state.first}</div>
//       <div>Last: {state.last}</div>
//       <input
//         type="text"
//         value={state.last}
//         onChange={(e) => dispatch({ last: e.target.value })}
//       />
//     </div>
//   );
// }

// function NameList() {
//   const [state, dispatch] = useReducer(
//     (state, action) => {
//       switch (action.type) {
//         case "SET_NAME":
//           return { ...state, name: action.payload };
//         case "ADD_NAME":
//           return {
//             ...state,
//             names: [...state.names, state.name],
//             name: "",
//           };
//       }
//     },
//     {
//       names: [],
//       name: "",
//     },
//   );
//   return (
//     <div className="App">
//       <div>
//         {state.names.map((name, index) => (
//           <div key={index}>{name} </div>
//         ))}
//       </div>

//       <input
//         type="text"
//         value={state.name}
//         onChange={(e) =>
//           dispatch({ type: "SET_NAME", payload: e.target.value })
//         }
//       />
//       <button onClick={() => dispatch({ type: "ADD_NAME" })}>Add Name</button>
//     </div>
//   );
// }

// function App() {
//   return;
//   <div>
//     <UserForm />
//     <NameList />
//   </div>;
// }

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
