import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import { BrowserRouter, Router, Route } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Router>
      <Route>
        <App/>
      </Route>
    </Router>
  </BrowserRouter>
)
