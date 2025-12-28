
/*
 * Project final hand-in: Javascript File Index.js
 * 
 * Authors: Juan José Gómez Villegas (u1987338@campus.udg.edu)
 * 
 * Date: 2025-12-01
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import * as utils from './utils.js';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App utils={utils} />
  </React.StrictMode>
);
