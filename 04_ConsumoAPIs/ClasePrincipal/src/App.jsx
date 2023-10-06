import { useEffect, useState } from "react";
import Producto from "./components/Producto";
import Buscador from "./components/Buscador";

const App = () => {
  const [like, setLike] = useState(0);
  const [palabra, setPalabra] = useState();
  const agregarLike = () => {
    setLike(like + 1);
  };
  useEffect(
    () => {
      agregarLike();
      //document.title="Tienes " + like + " en tu cuenta"
    },
    [] //[like]
  );
  return (
    <>
      <Buscador palabra={palabra} setPalabra={setPalabra}/>
      <h1>Tienes {like} en tu cuenta</h1>
      <button onClick={agregarLike}>Agregar like</button>
      <Producto palabra={palabra}/>
    </>
  );
};

export default App;
