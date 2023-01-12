import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
