import axios from 'axios';

const api = axios.create({
  baseURL: 'https://agency-ikgd.vercel.app/api',
  headers: {
    'Content-Type': 'application/json',
  }
});

export default api;
