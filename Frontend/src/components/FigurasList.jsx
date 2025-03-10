// src/components/FigurasList.jsx
import React, { useEffect, useState } from 'react';
import { getFiguras, deleteFigura } from '../services/figurasApi';
import { Link } from 'react-router-dom';

const FigurasList = () => {
  const [figuras, setFiguras] = useState([]);
  const [error, setError] = useState(null);

  const fetchFiguras = async () => {
    try {
      const data = await getFiguras();
      setFiguras(data);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteFigura(id);
      fetchFiguras();
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchFiguras();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Lista de Figuras</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="mb-3 text-end">
        <Link to="/figuras/nueva" className="btn btn-success">
          Crear nueva figura
        </Link>
      </div>
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Base</th>
            <th>Altura</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {figuras.map((figura) => (
            <tr key={figura.id}>
              <td>{figura.id}</td>
              <td>{figura.base}</td>
              <td>{figura.altura}</td>
              <td>
                <Link to={`/figuras/${figura.id}`} className="btn btn-info btn-sm me-2">
                  Detalle
                </Link>
                <Link to={`/figuras/${figura.id}/editar`} className="btn btn-warning btn-sm me-2">
                  Editar
                </Link>
                <button onClick={() => handleDelete(figura.id)} className="btn btn-danger btn-sm">
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FigurasList;
