import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import App from './App.jsx'
import Home from './Home.jsx'
import AuthMiddleware from './Middleware.jsx';
import Regitrar from './Registrar.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
      <Route element={<AuthMiddleware/>}>
        <Route path='/'element={<Home />} />
      </Route>
      <Route path='/login' element={<App />} />
      <Route path='/registrar' element={<Regitrar />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);