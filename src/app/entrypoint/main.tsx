import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import { BrowserRouter } from "react-router-dom";

import { QueryClientProvider } from "@tanstack/react-query";
import App from "../App";
import { queryClient } from "../queryClient/query-client";

import "@/shared/translations/i18nConfiguration";

const CURRENT_APP_DOMAIN = import.meta.env.VITE_APP_BASE_URL;
const baseName = CURRENT_APP_DOMAIN ? "/" + CURRENT_APP_DOMAIN : "";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename={baseName}>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
);
