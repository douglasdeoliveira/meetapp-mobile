import axios from 'axios';

import { store } from '~/store';
import { refreshToken, signOut } from '~/store/modules/auth/actions';

const api = axios.create({
  baseURL: 'http://10.0.2.2:3333',
});

// Add a response interceptor
api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      originalRequest.url.includes('/sessions/refresh')
    ) {
      store.dispatch(signOut());
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !error.config._retry) {
      originalRequest._retry = true;
      return api.post('/sessions/refresh').then(res => {
        store.dispatch(refreshToken(res.data.token));
        originalRequest.headers.Authorization = `Bearer ${res.data.token}`;

        return api.request(originalRequest);
      });
    }

    return Promise.reject(error);
  },
);

export default api;
