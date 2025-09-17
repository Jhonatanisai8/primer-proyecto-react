import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PrimerComponente } from "./01-variables/PrimerComponente";
import { SegundoComponente } from "./01-variables/SegundoComponente";
import { ComponenteVariables } from "./01-variables/ComponenteVariables";
// importamos los estilos css
import "./styles.css";
import "./01-variables/PrimerComponente.css";
import { Props } from "./02-props/Props";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <SegundoComponente /> */}
    {/* <PrimerComponente /> */}
    {/* <ComponenteVariables /> */}
    <Props
      titulo="Esta seccion es de props"
      // subtitulo="Curso de React"
      // numero={42}
    />
  </StrictMode>
);
