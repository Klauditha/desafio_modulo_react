/* eslint-disable react/prop-types */
export const Card = (props) => {
  return (
    <>
    <h1>{props.titulo}</h1>
    <div>{props.imagen}</div>
    <div>{props.texto}</div>
    </>
  )
}

