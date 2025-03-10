import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import { App } from './templates/App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignIn } from './templates/SignIn';
import { Menu } from './templates/Menu';
import { Profile } from './components/Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Menu />} />
        <Route path='/:id' element={<Menu />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<Menu />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
