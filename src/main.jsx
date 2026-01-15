import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Inicio from './pages/Inicio.jsx';
import Noticias from './pages/Noticias.jsx';
import Mortandad from './pages/Mortandad.jsx';
import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Inicio />} />
          <Route path="noticias" element={<Noticias />} />
          <Route path="mortandad" element={<Mortandad />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);