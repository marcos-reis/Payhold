import axios from 'axios';

const api = axios.create({
  baseURL: 'https://qr42d.sse.codesandbox.io',
});

export default api;
