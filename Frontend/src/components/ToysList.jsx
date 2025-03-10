import React, { useEffect, useState } from 'react';
import { getToysCost } from '../services/toysApi';
import { Link } from 'react-router-dom';

const ToysList = () => {
  const [totalCost, setTotalCost] = useState(null); // Inicializa en null para evitar errores
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchToys = async () => {
      try {
        const cost = await getToysCost();
        console.log("Total Cost recibido:", cost); // 🔍 Verifica qué se recibe en la consola
        setTotalCost(cost);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchToys();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Toys list</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="3" className="text-center">
              <strong>Total Cost: {totalCost !== null ? `$${totalCost}` : 'Loading...'}</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ToysList;
