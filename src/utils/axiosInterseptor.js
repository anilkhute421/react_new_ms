import axios from 'axios';
import { store } from '../redux/store';
import { spineerAction } from '../redux/project/action';

const base_url = process.env.REACT_APP_API_URL;

const axiosInterceptor = axios.create({
  timeout: 10000,
  baseURL: base_url
});

axiosInterceptor.interceptors.request.use(
  (config) => {
    store.dispatch(spineerAction(true));
    config.headers['Authorization'] = `Bearer ${store.getState()?.signIn?.token}`;
    // console.log(config.headers['Authorization'], 'config');
    config.headers['Accept'] = 'application/json';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInterceptor.interceptors.response.use(
  (response) => {
    store.dispatch(spineerAction(false));
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInterceptor;
