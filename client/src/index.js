import React from "react";
import ReactDOM from "react-dom";
import App from "./views/App";
import { QueryProvider } from "./context/QueryContext";
import { DataProvider } from "./context/DataContext";
import store from "./redux/configureStore";

import { Provider } from "react-redux";

// Global styles
import "sanitize.css/sanitize.css";
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <QueryProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </QueryProvider>
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
