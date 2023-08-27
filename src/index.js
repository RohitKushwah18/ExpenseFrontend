import React from 'react';
import ReactDOM from 'react-dom/client';
// import {BrowserRouter} from 'react-router-dom';
import { GlobalProvider } from './context/context';
import { BrowserRouter } from 'react-router-dom';


import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
  <BrowserRouter>
  <GlobalProvider>
  <App />
  </GlobalProvider>
  </BrowserRouter>
  </React.StrictMode>

);

// reportWebVitals();
