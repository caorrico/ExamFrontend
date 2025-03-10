export const getToysCost = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/toysCost'); // Asegúrate de que esta URL sea la correcta
    if (!response.ok) throw new Error('Error al obtener los datos');

    const data = await response.json();
    console.log("Datos recibidos de la API:", data); // 🔍 Verifica qué devuelve la API en la consola

    if (Array.isArray(data) && data.length > 0) {
      return data[0]["Total Cost"]; // Accede correctamente al valor
    } else {
      throw new Error("Estructura inesperada en la respuesta de la API");
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
