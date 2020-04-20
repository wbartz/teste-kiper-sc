import React from "react";
import ReactDOM from "react-dom";
import "react-overlay-loader/styles.css";
import App from "./container/App";
import * as serviceWorker from "./serviceWorker";
import "material-icons/iconfont/material-icons.scss";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize";
import "./styles/init.scss";

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
