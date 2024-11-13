import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ThemeProvider from "./context/ThemeContextProvider.tsx";
import StepsProvider from "./context/StepsContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <ThemeProvider>
    <StepsProvider>
      <App />
    </StepsProvider>
  </ThemeProvider>
  // </StrictMode>
);
