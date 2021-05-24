import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import DatePickers from './date';
import funny from "./image.jpg";

ReactDOM.render(
  <React.StrictMode>
    <DatePickers />
    <img src={funny} alt="funny"/>
  </React.StrictMode>,
  
  document.getElementById('root')
);