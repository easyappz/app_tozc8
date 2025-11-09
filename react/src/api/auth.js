import instance from './axios';

export const register = async (email, firstName, lastName, password) => {
  const response = await instance.post('/api/register/', {
    email,
    first_name: firstName,
    last_name: lastName,
    password
  });
  return response.data;
};

export const login = async (email, password) => {
  const response = await instance.post('/api/login/', {
    email,
    password
  });
  return response.data;
};

export const getProfile = async () => {
  const response = await instance.get('/api/profile/');
  return response.data;
};

export const updateProfile = async (email, firstName, lastName) => {
  const response = await instance.put('/api/profile/', {
    email,
    first_name: firstName,
    last_name: lastName
  });
  return response.data;
};

export const logout = async (refreshToken) => {
  const response = await instance.post('/api/logout/', {
    refresh: refreshToken
  });
  return response.data;
};
