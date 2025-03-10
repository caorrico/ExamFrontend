// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FigurasList from './components/FigurasList';
import FiguraDetail from './components/FiguraDetail';
import CrearFigura from './components/CrearFigura';
import EditarFigura from './components/EditarFigura';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/figuras" element={<FigurasList />} />
        <Route path="/figuras/nueva" element={<CrearFigura />} />
        <Route path="/figuras/:id" element={<FiguraDetail />} />
        <Route path="/figuras/:id/editar" element={<EditarFigura />} />
        {/* Puedes agregar una ruta para redirigir '/' a '/figuras' o una página de inicio */}
        <Route path="/" element={<FigurasList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
