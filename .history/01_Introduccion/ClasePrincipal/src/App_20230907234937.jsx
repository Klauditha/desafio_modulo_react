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
      <Card/>
    </>
  );
};

export default App;
