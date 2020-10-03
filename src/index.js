import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/site.css'
import { initializeIcons } from '@uifabric/icons';

initializeIcons();

ReactDOM.render(<App />, document.getElementById("root"));