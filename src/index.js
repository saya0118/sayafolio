import React from "react";
import ReactDOM from "react-dom";
import { App } from "./component/App";
import { ContextProvider } from "./component/Context/Context";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
