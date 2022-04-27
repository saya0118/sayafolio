import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./component/App";
import { ContextProvider } from "./component/Context/Context";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>
);
