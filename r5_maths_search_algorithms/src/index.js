import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import StopWatch from "./components/StopWatch";
import MergeSort from "./components/MergeSort";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <StopWatch/>
    <MergeSort/>
  </React.StrictMode>,
  document.getElementById('root')
);


