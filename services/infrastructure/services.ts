import axios from 'axios';
import apiClient, { BASE_URL } from '../utils';

const API_URL = `${BASE_URL}/Service`;

export const getServices = async () => {
  const response = await apiClient.get(API_URL);
  return response.data.value;
};

export const getServicesById = async (id: string) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data.value;
};
export const searchServices = async (keyword: string) => {
  const response = await apiClient.get(`${API_URL}/search/${keyword}`);
  return response.data.value;
};
export const createServices = async (data: any) => {
  const response = await axios.post(API_URL, data);
  return response.data.value;
};

export const updateServices = async (id: string, data: any) => {
  const response = await axios.put(`${API_URL}/${id}`, data);
  return response.data.value;
};

export const deleteServices = async (id: string) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data.value;
};
