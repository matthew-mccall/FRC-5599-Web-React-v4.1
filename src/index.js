import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import $ from 'jquery';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/site.css'
import { initializeIcons } from '@uifabric/icons';

initializeIcons();

$(function () {
    $('[data-toggle="tooltip"]').tooltip({ boundary: 'window' })
})

ReactDOM.render(<App />, document.getElementById("root"));