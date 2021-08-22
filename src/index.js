import React from "react";
import { render } from "react-dom";

import { Provider } from "react-redux";
import store from "./store/store.js";

import App from "./App.js";

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
