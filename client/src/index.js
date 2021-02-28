import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// learn more about measuring app performance: https://bit.ly/CRA-vitals
reportWebVitals();
