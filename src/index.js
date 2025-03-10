import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import {App } from './templates/App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<App />} />
      <Route path='*' element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
