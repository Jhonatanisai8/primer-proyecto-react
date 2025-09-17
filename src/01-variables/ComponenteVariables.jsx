// import { Fragment } from "react";

// import React from 'react'
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
export const ComponenteVariables = () => {
  return (
    <>
      <h1>Variables en JSX</h1>
      <p>
        <strong>String: </strong>
        {nombre}
      </p>

      <p>
        <strong>Numero: </strong>
        {numero}
      </p>
      <p>
        <strong>Arreglo: </strong>
        {array}
      </p>
      <p>
        <strong>Mayor Edad: </strong>
        {mayorEdad}
      </p>
      <p>
        <strong>Funcion: </strong>
        {funcion()}
      </p>
      <p>
        <strong>Objeto: </strong>
        {objecto.nombre}
      </p>
    </>
  );
};
