import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { UnlockPage } from "./UnlockPage";
import "./index.css";

const isUnlock = typeof window !== "undefined" && window.location.pathname === "/unlock";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {isUnlock ? <UnlockPage /> : <App />}
  </StrictMode>
);
