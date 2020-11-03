import axios from 'axios';
import store from './store/index';

const instance = axios.create()

instance.defaults.baseURL = process.env.VUE_APP_API

instance.interceptors.request.use(config => {
  config.headers.Authorization = `JWT ${store.getters.getJwtToken}`
  return config
});

export default instance