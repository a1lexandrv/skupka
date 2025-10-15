import axios from 'axios';

const mainURL = process.env.NEXT_PUBLIC_BASE_URL;
const skupkaURL = process.env.NEXT_PUBLIC_SKUPKA_URL;

const API = axios.create({
  baseURL: mainURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Сделал для редиректа на основной сайт
export const urls = {
  lombard: skupkaURL,
  main: mainURL,
};

export default API;
