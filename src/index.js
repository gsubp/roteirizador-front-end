import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import favicon from "./assets/favicon.ico"
import Favicon from "react-favicon";

ReactDOM.render(
  <React.StrictMode>
    <Favicon url={favicon}/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
