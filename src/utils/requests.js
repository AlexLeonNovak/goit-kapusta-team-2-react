import axios from 'axios';
import api from './entryPoints';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

export const setToken = token => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

// Auth
export const authRegister = data => axios.post(api.register(), data);
export const authLogin = data => axios.post(api.login(), data);

export const getUser = token => {
  const options = {
    method: 'get',
    url: api.user(),
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return axios(options);
};