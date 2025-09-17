import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PrimerComponente } from "./01-variables/PrimerComponente";
import { SegundoComponente } from "./01-variables/SegundoComponente";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SegundoComponente />
    <PrimerComponente />
  </StrictMode>
);
