import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5268', // Replace with your ASP.NET API URL (e.g., https://localhost:7042 if using IIS Express)
  withCredentials: true, // Required for CORS with credentials
});

export const getData = async () => {
  try {
    const response = await api.get('/api/courses'); // Replace with your API endpoint
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Add more functions for other endpoints (POST, PUT, DELETE, etc.) as needed
export default api;