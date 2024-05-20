import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
const db = require('./server/server'); 
const connection = require('./server/db/query'); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);