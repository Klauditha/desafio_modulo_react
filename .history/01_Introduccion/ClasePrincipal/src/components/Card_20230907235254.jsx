/* eslint-disable react/prop-types */
export const Card = (props) => {
  return (
    <>
    <h1>{props.titulo}</h1>
    <img src={props.imagen}/>
    <p>{props.texto}</p>
    <button>Enviar</button>
    </>
  )
}

