// src/services/figurasApi.js
const API_URL = 'http://localhost:3000/api/figuras'; // Asegúrate de ajustar el puerto si es necesario

// Obtener todas las figuras
export const getFiguras = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Error al obtener figuras');
  return await response.json();
};

// Crear una nueva figura
export const createFigura = async (figura) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(figura)
  });
  if (!response.ok) throw new Error('Error al crear figura');
  return await response.json();
};

// Obtener figura por ID
export const getFiguraById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) throw new Error('Error al obtener figura');
  return await response.json();
};

// Actualizar figura
export const updateFigura = async (id, figura) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(figura)
  });
  if (!response.ok) throw new Error('Error al actualizar figura');
  return await response.json();
};

// Eliminar figura
export const deleteFigura = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  });
  if (!response.ok) throw new Error('Error al eliminar figura');
  return await response.json();
};
