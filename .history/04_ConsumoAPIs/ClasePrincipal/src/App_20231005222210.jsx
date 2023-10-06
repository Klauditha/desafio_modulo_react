import { useState } from "react";


const App = () => {

  const [like,setLike]=useState(0)
  return (
    <>
    <div>Hola mindo</div>
    <h1>Tienes {like} en tu cuenta</h1>
    </>
    
  )
}

export default App