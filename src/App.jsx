import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Company from './pages/Company';
import Contact from './pages/Contact';

// ========== IMPORTAMOS TODAS LAS PÁGINAS DE TRABAJOS ==========
import Viviendas from './pages/trabajos/Viviendas';
import ObraGris from './pages/trabajos/ObraGris';
import Refacciones from './pages/trabajos/Refacciones';
import QuinchosPiletas from './pages/trabajos/QuinchosPiletas';
import ObrasPublicas from './pages/trabajos/ObrasPublicas';
import ProyectosEspeciales from './pages/trabajos/ProyectosEspeciales';

import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        {/* ========== RUTAS PRINCIPALES ========== */}
        <Route path="/" element={<Home />} />
        <Route path="/empresa" element={<Company />} />
        <Route path="/contacto" element={<Contact />} />
        
        {/* ========== RUTAS DE TRABAJOS ========== */}
        <Route path="/trabajos/viviendas" element={<Viviendas />} />
        <Route path="/trabajos/obra-gris" element={<ObraGris />} />
        <Route path="/trabajos/refacciones" element={<Refacciones />} />
        <Route path="/trabajos/quinchos-piletas" element={<QuinchosPiletas />} />
        <Route path="/trabajos/obras-publicas" element={<ObrasPublicas />} />
        <Route path="/trabajos/proyectos-especiales" element={<ProyectosEspeciales />} />
        
        {/* ========== RUTA 404 ========== */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;