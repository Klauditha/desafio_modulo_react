
const Buscador = ({palabra,setPalabra}) => {
  
  return (
    <form>
      <label htmlFor="buscador">Buscar</label>
      <input
        type="text"
        placeholder="buscar..."
        name="buscador"
        onChange={(e) => setPalabra(e.target.value)}
      />
    </form>
  );
};

export default Buscador;
