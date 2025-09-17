// import React from "react";

// VARIABLES EN JSX
const nombre = "Esto es una Cadena de texto";
const numero = 21;
const array = ["Curso de react", 24, true];
const mayorEdad = true;
const funcion = () => 1 + 1;
const objecto = {
  nombre: "Curso de react",
  profesor: "Sergie Code",
};
const fecha = new Date();

export const PrimerComponente = () => {
  //   return <h1>{objecto.nombre}</h1>;
  return (
    <ul>
      <li>
        <strong>String:</strong> {nombre}
      </li>
      <li>
        <strong>Numero:</strong> {numero}
      </li>
      <li>
        <strong>Arreglo:</strong> {array}
      </li>
      <li>
        <strong>Boolean:</strong> {mayorEdad}
      </li>
      <li>
        <strong>Funcion:</strong> {funcion()}
      </li>
      <li>
        <strong>Objeto-Propiedad:</strong> {objecto.nombre}
      </li>
      <li>
        <strong>Fecha: </strong>
        {JSON.stringify(fecha)}
      </li>
    </ul>
  );
};
