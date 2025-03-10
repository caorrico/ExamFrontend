// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ToysList from './components/ToysList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/toys" element={<ToysList />} />
        <Route path="/" element={<ToysList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
