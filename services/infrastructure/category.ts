 import apiClient, { BASE_URL } from '../utils';

const API_URL = `${BASE_URL}/ServiceCategory`;

export const getServicesCategory = async () => {
  const response = await apiClient.get(API_URL);
  return response.data.value;
};

export const getServicesCategoryById = async (id: number) => {
  const response = await apiClient.get(`${API_URL}/${id}`);
  return response.data.value;
};

export const createServicesCategory = async (data: any) => {
  const response = await apiClient.post(API_URL, data);
  return response.data.value;
};

export const updateServicesCategory = async (id: string, data: any) => {
  const response = await apiClient.put(`${API_URL}/${id}`, data);
  return response.data.value;
};

export const deleteServicesCategory = async (id: string) => {
  const response = await apiClient.delete(`${API_URL}/${id}`);
  return response.data.value;
};
