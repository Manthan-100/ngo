import { API_BASE_URL } from '../services/const';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Base64 } from 'react-native';

// Create an Axios instance with default configuration
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  async config => {
    // Add the Authorization header if a token is available
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Encode credentials if needed (e.g., Basic Authentication)
    // Example: config.headers.Authorization = `Basic ${Base64.encode('username:password')}`;

    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default axiosInstance;
