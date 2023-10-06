import { useState } from "react";

const App = () => {
  const [like, setLike] = useState(0);
  return (
    <>
      <h1>Tienes {like} en tu cuenta</h1>
      <button onClick={() => setLike(like + 1)}>Agregar like</button>
    </>
  );
};

export default App;
