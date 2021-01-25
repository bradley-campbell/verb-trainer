import React from "react";
import ReactDOM from "react-dom";
import App from "./views/App";
import { QueryProvider } from "./context/QueryContext";
import { DataProvider } from "./context/DataContext";

// Global styles
import "sanitize.css/sanitize.css";
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <QueryProvider>
        <App />
      </QueryProvider>
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
