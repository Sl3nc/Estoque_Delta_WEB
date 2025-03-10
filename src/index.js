import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignIn } from './templates/SignIn';
import { Home } from './templates/Home';
import { Profile } from './templates/Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path='/:id' element={<Home />} /> */}
        <Route path='/' element={<Home />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
