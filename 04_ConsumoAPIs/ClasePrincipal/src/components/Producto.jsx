import { useEffect, useState } from "react";
//import { productos } from "../data/data.js";

//uuid para crear indices
//console.log(productos);

//https://fakestoreapi.com/

const Producto = ({palabra}) => {
  const [datos, setDatos] = useState();
  const urlApi = "https://fakestoreapi.com/products";

  //uso con promesas
  /*useEffect(() => {
    fetch(urlApi)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDatos(data);
      });
  }, []);*/

  //use async await
  useEffect(() => {
    getData();
  });

  const getData = async () => {
    const res = await fetch(urlApi);
    const data = await res.json();
    setDatos(data);
  };

  let resultado = "";

  if(!palabra) {
    resultado = datos;
  } else {
    resultado = datos.filter((item) => {
      return item.title.toLowerCase().includes(palabra.toLowerCase());
    })
  }
  

  /*
   */
  return (
    <div>
      {" "}
      {resultado && resultado.length>0 ? (resultado?.map((item) => (
        <div key={item.id}>
          <p>{item.descripcion}</p>
          <p>{item.title}</p>
        </div>
      ))):(<p>No existen resultados</p>)}
    </div>
  );
};

export default Producto;
