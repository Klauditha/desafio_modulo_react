import "./App.css";
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
      <Header />
      <Header />
      <Header />
    </>
  );
};

export default App;
