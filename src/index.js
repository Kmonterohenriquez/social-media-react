import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// REACT ROUTER
import { HashRouter } from "react-router-dom";

// REDUX
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
