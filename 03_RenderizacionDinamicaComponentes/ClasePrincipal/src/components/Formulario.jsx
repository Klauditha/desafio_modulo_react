import { useState } from "react";

const Formulario = ({clientes, setClientes}) => {
    const [name, setName] = useState("");   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error,setError] = useState(false);
    const [mensaje,setMensaje] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, password);
        if (name === "" || email === "" || password === "") {
            setError(true);
            setMensaje("Todos los datos son requeridos");
            return;
        }
        alert("Formulario enviado");
        setError(false);
        setName("");
        setEmail("");
        setPassword("");
        const cliente = { name, email, password };
        console.log(cliente);
        setClientes([...clientes, cliente]);
    }
  return (
    <div  className="w-50">
      <h1>Base de datos clientes</h1>
      <form onSubmit={handleSubmit}>
        <div  className="mb-2">
            {error ? <p className="text-danger">{mensaje}</p> : null}
            <label className="form-label" htmlFor="name">Nombre</label>
            <input className="form-control" type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div  className="mb-2">
            <label className="form-label" htmlFor="email">E-Mail</label>
            <input className="form-control" type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div  className="mb-2">
            <label className="form-label" htmlFor="password">Password</label>
            <input className="form-control" type="text" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary">Agregar cliente</button>
      </form>
    </div>
  );
};

export default Formulario;
