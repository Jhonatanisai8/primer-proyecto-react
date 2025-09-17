import React from "react";
import PropTypes from "prop-types";

export const Props = ({ titulo, subtitulo = "Hola", numero = 90 }) => {
  console.log(titulo);
  console.log(subtitulo);
  console.log(typeof numero);
  return (
    <>
      <h1>{titulo}</h1>
      <h2>{subtitulo}</h2>
      <h3>{numero + 1}</h3>
    </>
  );
};

Props.propTypes = {
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string.isRequired,
};

Props.defaultProps = {
  titulo: "Curso de React 2025",
  subtitulo: "Clase donde hablamos de Props",
};
