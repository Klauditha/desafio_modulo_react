// App.jsx
import { useState, useEffect } from "react";
import "./App.css";
function App() {
  /*
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  );*/
  const [nombre, setNombre] = useState("");
  useEffect(() => {
    console.log("hola");
  },[]);
  return (
    <div className="App">
      <h1>Manejo de efectos en react</h1>
      <form>
        <input
          type="text"
          placeholder="nombre"
          name={nombre}
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </form>
    </div>
  );
}

export default App;
