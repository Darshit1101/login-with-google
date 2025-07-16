import { publicApi } from '@api';

export const logout = async () => {
  try {
    // Call backend logout endpoint
    await publicApi.post('/auth/logout');

    // Clear local storage
    localStorage.removeItem('user');
    localStorage.removeItem('token');

    return true;
  } catch (error) {
    console.error('Logout error:', error);
    // Even if backend fails, clear local storage
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    return false;
  }
};

export const isLoggedIn = () => {
  const user = localStorage.getItem('user');
  return user !== null;
};

export const getUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};
