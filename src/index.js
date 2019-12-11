import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./layouts/layout"
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( <Layout /> , document.getElementById('root'));

registerServiceWorker();