import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div style={{
        width:"1520px", 
        margin: '0 auto',
        border: '1px solid red'
        }}>
        <App />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

