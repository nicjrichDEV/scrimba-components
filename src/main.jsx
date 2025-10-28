import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GlobalTooltipProvider } from "./components/tooltip/TooltipGlobalProvider.jsx";
import { ToastGlobalProvider } from "./components/toast/ToastGlobalProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalTooltipProvider resetTime={2000}>
      <ToastGlobalProvider>
        <App />
      </ToastGlobalProvider>
    </GlobalTooltipProvider>
  </StrictMode>
);
