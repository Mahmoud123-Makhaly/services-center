import axios from 'axios';
import apiClient, { BASE_URL } from '../utils';
//import { BASE_URL, header } from '../utils';

//const API_URL = `${BASE_URL}/Auth/Login`;

// export const SignIn = async (data: any) => {
//   const response = await axios.post(API_URL, data);

//   return response.data.value;
// };
const API_URL = `${BASE_URL}/Auth/RegisterCustomer`;

export const SignUp = async (data: any) => {
  const response = await apiClient.post(API_URL, data);
  return response.data.value;
};
