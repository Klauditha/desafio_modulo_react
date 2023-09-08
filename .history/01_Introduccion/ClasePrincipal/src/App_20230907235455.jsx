import "./App.css";
import { Card } from "./components/Card";
import Header from "./components/Header";

const App = () => {
  return (
    //Uso de Fragment <>
    <>
      <Header />
      <h1>Hola Mundo</h1>
      <p>Soy un parrafo</p>
      <p>Soy un parrafo</p>
      <p>Soy un parrafo</p>
      <div className="container">
      <Card titulo="uno" imagen="https://picsum.photos/200/300" texto="prueba"/>
      <Card titulo="dos" imagen="https://picsum.photos/seed/picsum/200/300" texto="prueba"/>
      <Card titulo="tres" imagen="https://picsum.photos/200/300" texto="prueba"/>
      </div>
      
    </>
  );
};

export default App;
