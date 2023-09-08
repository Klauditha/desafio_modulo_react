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
      <Card/>
      <Card/>
      </div>
      
    </>
  );
};

export default App;
