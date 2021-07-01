import axios from 'axios';

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_API,
  headers: {
    "Content-Type": "application/json",
    "Authorization": 'Bearer ' + localStorage.getItem('token')
  }
});

axiosClient.interceptors.request.use(async (config) => {
  config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token');

  return await config;
});

export default axiosClient;