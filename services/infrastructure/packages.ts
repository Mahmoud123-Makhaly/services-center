import axios from 'axios';
import apiClient, { BASE_URL } from '../utils';

const API_URL = `${BASE_URL}/ServicePackage`;

export const getServicesPackages = async () => {
  const response = await apiClient.get(API_URL);
  return response.data.value;
};

export const getServicesPackagesById = async (id: number) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data.value;
};

export const createServicesPackages = async (data: any) => {
  const response = await axios.post(API_URL, data);
  return response.data.value;
};

export const updateServicesPackages = async (id: string, data: any) => {
  const response = await axios.put(`${API_URL}/${id}`, data);
  return response.data.value;
};

export const deleteServicesPackages = async (id: string) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data.value;
};
