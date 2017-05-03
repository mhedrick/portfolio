import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles/style.css';
import App from './App';

render(
 <BrowserRouter>
   <App />
 </BrowserRouter>,
  document.getElementById('root')
);
