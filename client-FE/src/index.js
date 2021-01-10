import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import QueryProvider from "./QueryContext";

ReactDOM.render(
  <QueryProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QueryProvider>,
  document.getElementById("root")
);
