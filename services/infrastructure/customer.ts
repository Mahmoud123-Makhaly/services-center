import axios from 'axios';
import apiClient, { BASE_URL } from '../utils';

const API_URL = `${BASE_URL}/Customer`;

export const getCustomerById = async (id: string) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data.value;
};
