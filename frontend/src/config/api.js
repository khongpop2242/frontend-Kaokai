// API Configuration
// This file manages the base URL for API calls
// In production, this should be set via environment variables

const getApiBaseUrl = () => {
  // If REACT_APP_API_URL is set, use it
  if (process.env.REACT_APP_API_URL) {
    return process.env.REACT_APP_API_URL;
  }
  
  // In production (on Render), use the actual backend URL
  // In development, use localhost
  const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  
  if (isDevelopment) {
    return 'http://localhost:5050';
  } else {
    return 'https://backend-kaokai.onrender.com';
  }
};

const API_BASE_URL = getApiBaseUrl();

export default API_BASE_URL;

