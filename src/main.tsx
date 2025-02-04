import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "App";
import { NotesProvider } from "context/provider.tsx";
import "index.scss";

createRoot(document.getElementById("root")!).render(
  <NotesProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </NotesProvider>,
);
