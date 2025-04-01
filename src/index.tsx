import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AmbitioElite } from "./screens/AmbitioElite/AmbitioElite";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <AmbitioElite />
  </StrictMode>
);
