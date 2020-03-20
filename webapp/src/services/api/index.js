import axios from 'axios'

import {getToken} from '../auth'
var baseURL = process.env.REACT_APP_DEVELOPMENT_HOST ||'https://api.payhold.com.br'
const api = axios.create({
  baseURL
})
api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api
