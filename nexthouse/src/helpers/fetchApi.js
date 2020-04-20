import axios from 'axios';
import { getCookie } from './cookies';

const { REACT_APP_API, REACT_APP_TIMEOUT } = process.env;

const client = axios.create();

client.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    let msg;
    try {
      const { data } = error.response;
      msg = data.message;
      if (typeof data.message !== 'string') {
        msg = data.message.map((line) => `${line.replace(',', '')}<br />`);
      }
    } catch (er) {
      msg = 'Erro ao processar requisição';
    }

    return Promise.reject({
      message: msg,
    });
  }
);

export default async (endpoint, method = 'get', body = {}) => {
  try {
    const token = await getCookie('token');
    const options = {
      method,
      timeout: REACT_APP_TIMEOUT,
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `${token}`,
      },
    };

    if (method !== 'get') {
      options.data = JSON.stringify(body);
    }

    const url = REACT_APP_API.concat(endpoint);
    return client(url, options);
  } catch (error) {
    throw new Error('Ocorreu um erro durante a requisição');
  }
};
