/* eslint-disable react/prop-types */
export const Card = (...{titulo, imagen, texto}) => {
  return (
    <>
    <h1>{titulo}</h1>
    <img src={imagen}/>
    <p>{texto}</p>
    <button>Enviar</button>
    </>
  )
}

