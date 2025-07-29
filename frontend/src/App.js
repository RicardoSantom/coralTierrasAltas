import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HistoriaPage from './pages/HistoriaPage';
import RepertorioPage from './pages/RepertorioPage';
import ConciertosPage from './pages/ConciertosPage';
import ContratarPage from './pages/ContratarPage';
import EscuelaPage from './pages/EscuelaPage';
import UnetePage from './pages/UnetePage';
import SociosPage from './pages/SociosPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/historia" element={<HistoriaPage />} />
          <Route path="/repertorio" element={<RepertorioPage />} />
          <Route path="/conciertos" element={<ConciertosPage />} />
          <Route path="/contratar" element={<ContratarPage />} />
          <Route path="/escuela" element={<EscuelaPage />} />
          <Route path="/unete" element={<UnetePage />} />
          <Route path="/socios" element={<SociosPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;