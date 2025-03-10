// src/components/CrearFigura.jsx
import React, { useState } from 'react';
import { createFigura } from '../services/figurasApi';
import { useNavigate } from 'react-router-dom';

const CrearFigura = () => {
  const [base, setBase] = useState('');
  const [altura, setAltura] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createFigura({ base, altura });
      navigate('/figuras');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card w-50">
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Crear Nueva Figura</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Base:</label>
              <input
                type="number"
                className="form-control"
                value={base}
                onChange={(e) => setBase(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Altura:</label>
              <input
                type="number"
                className="form-control"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Crear Figura
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CrearFigura;
