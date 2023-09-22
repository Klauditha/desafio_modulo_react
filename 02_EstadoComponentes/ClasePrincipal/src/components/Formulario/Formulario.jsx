import { useState } from "react";

const Formulario = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando");
    if (name == "") {
      setError(true);
    } else setError(false);
  };
  return (
    <div className="container">
      <h1>Dime tu nombre</h1>
      {error ? <p>Hay un error</p> : null}
      <form onSubmit={handleSubmit}>
        <div className="w-25">
          <label className="form-label">Agrega tu nombre</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <button className="btn btn-primary w-25 mt-4">Agregar</button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
