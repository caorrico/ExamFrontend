// src/components/FiguraDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getFiguraById } from '../services/figurasApi';

const FiguraDetail = () => {
  const { id } = useParams();
  const [figura, setFigura] = useState(null);
  const [error, setError] = useState(null);

  const fetchFigura = async () => {
    try {
      const data = await getFiguraById(id);
      setFigura(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchFigura();
  }, [id]);

  if (error) return <div className="container mt-5"><div className="alert alert-danger">{error}</div></div>;
  if (!figura) return <div className="container mt-5 text-center"><p>Cargando...</p></div>;

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card w-50">
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Detalle de la Figura</h2>
          <p className="card-text"><strong>ID:</strong> {figura.id}</p>
          <p className="card-text"><strong>Base:</strong> {figura.base}</p>
          <p className="card-text"><strong>Altura:</strong> {figura.altura}</p>
          <div className="text-center">
            <Link to="/figuras" className="btn btn-secondary">
              Volver a la lista
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiguraDetail;
