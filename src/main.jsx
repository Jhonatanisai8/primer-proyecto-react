import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PrimerComponente } from "./01-variables/PrimerComponente";
import { SegundoComponente } from "./01-variables/SegundoComponente";
import { ComponenteVariables } from "./01-variables/ComponenteVariables";
// importamos los estilos css
import "./styles.css";
import "./01-variables/PrimerComponente.css"
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <SegundoComponente /> */}
    <PrimerComponente />
    {/* <ComponenteVariables /> */}
  </StrictMode>
);
