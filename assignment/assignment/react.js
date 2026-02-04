// ===============================
// 1. Hello World Program
// ===============================
function App() {
  return <h1>Hello World</h1>;
}
export default App;


// ===============================
// 2. Counter Program (useState)
// ===============================
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  );
}
export default App;


// ===============================
// 3. Input Text Display
// ===============================
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <>
      <input onChange={(e) => setName(e.target.value)} />
      <h3>Your Name: {name}</h3>
    </>
  );
}
export default App;


// ===============================
// 4. Show / Hide Text
// ===============================
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <p>Hello React</p>}
    </>
  );
}
export default App;


// ===============================
// 5. Simple Todo Add
// ===============================
import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <input onChange={(e) => setTask(e.target.value)} />
      <button onClick={() => setTasks([...tasks, task])}>Add</button>

      <ul>
        {tasks.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </>
  );
}
export default App;


// ===============================
// 6. Change Color on Click
// ===============================
import { useState } from "react";

function App() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h2 style={{ color }}>Color Text</h2>
      <button onClick={() => setColor("blue")}>Blue</button>
      <button onClick={() => setColor("green")}>Green</button>
    </>
  );
}
export default App;


// ===============================
// 7. Conditional Rendering (Login)
// ===============================
import { useState } from "react";

function App() {
  const [login, setLogin] = useState(false);

  return (
    <>
      <h2>{login ? "Welcome User" : "Please Login"}</h2>
      <button onClick={() => setLogin(!login)}>
        {login ? "Logout" : "Login"}
      </button>
    </>
  );
}
export default App;
