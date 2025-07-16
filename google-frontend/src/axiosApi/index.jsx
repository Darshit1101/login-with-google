import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL 
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response) {
      console.error(
        `ERROR ${error.response.status}:`,
        error.response.data?.message || error.message
      );
    } else {
      console.error('ERROR:', error.message);
    }
    return Promise.reject(error);
  }
);

// For public (no token) requests like login or register
const publicApi = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL
});

export { api, publicApi };
