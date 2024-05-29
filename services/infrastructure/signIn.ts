import apiClient, { BASE_URL } from '../utils';

const API_URL = `${BASE_URL}/Auth/Login`;

export const SignIn = async (data: any) => {
  const response = await apiClient.post(API_URL, data);
  const token = response.data.value['token'];
  const userId = response.data.value['userId'];

  localStorage.setItem('token', token);
  localStorage.setItem('userId', userId);
  return token;
};
