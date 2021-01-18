import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DataProvider, DisplayProvider, QueryProvider } from "./Context";

ReactDOM.render(
  <DataProvider>
    <DisplayProvider>
      <QueryProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </QueryProvider>
    </DisplayProvider>
  </DataProvider>,
  document.getElementById("root")
);
