import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './Components/Header';

let test = window.navigator.userAgent.split(' ')
let withparentesis = test[1].replace('(','')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>
);
