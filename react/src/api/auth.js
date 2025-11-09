import instance from './axios';

export const register = async (userData) => {
  const response = await instance.post('/api/register/', userData);
  return response.data;
};

export const login = async (credentials) => {
  const response = await instance.post('/api/login/', credentials);
  return response.data;
};

export const getProfile = async () => {
  const response = await instance.get('/api/profile/');
  return response.data;
};

export const updateProfile = async (data) => {
  const response = await instance.put('/api/profile/', data);
  return response.data;
};

export const logoutRequest = async () => {
  const refresh = localStorage.getItem('refresh');
  const response = await instance.post('/api/logout/', { refresh });
  return response.data;
};