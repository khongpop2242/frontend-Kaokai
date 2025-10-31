// API Configuration
// ใช้ environment variable ถ้ามี ไม่เช่นนั้นใช้ค่า default
const API_URL = process.env.REACT_APP_API_URL || 'https://backend-kaokai.onrender.com';

export default API_URL;

