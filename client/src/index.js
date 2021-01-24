import React from "react";
import ReactDOM from "react-dom";
import App from "./views/App";
import { QueryProvider } from "./context/QueryContext";

// Global styles
import "sanitize.css/sanitize.css";
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
  <React.StrictMode>
    <QueryProvider>
      <App />
    </QueryProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
