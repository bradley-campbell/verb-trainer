import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import QueryProvider from "./QueryContext";
import DisplayProvider from "./DisplayContext";
import DataProvider from "./DataContext";

ReactDOM.render(
  <DataProvider>
    <QueryProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </QueryProvider>
  </DataProvider>,
  document.getElementById("root")
);
