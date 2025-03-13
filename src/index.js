import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignIn } from './templates/SignIn';
import { Home } from './templates/Home';
import { Profile } from './templates/Profile';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import { Page404 } from './templates/page404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path='/:id' element={<Home />} /> */}
        <Route path='/' element={<Home />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
