import { useState } from "react";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";

const App = () => {
  const [clientes, setClientes] = useState([]);
  return (
    <>
      <div className="container">
        <Formulario clientes={clientes} setClientes={setClientes} />
        <Listado  clientes={clientes}/>
      </div>
    </>
  );
};

export default App;
