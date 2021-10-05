import {toast} from 'react-toastify';
import {
  getUser,
  authRegister,
  authLogin,
} from '../../utils/requests';

import {
  authFetchSuccess,
  authFetchError,
  registerStart,
  registerSuccess,
  registerError,
  loginStart,
  loginSuccess,
  loginError,
} from './auth.action';

import { globalFetchStart, globalFetchFinish } from '../global/actions';

export const getUserOperation = token => dispatch => {
  dispatch(globalFetchStart());

  return getUser(token)
    .then(resp => {
      if (resp.status === 200) {
        const {user} = resp.data;
        dispatch(authFetchSuccess(user));
      } else {
        throw resp;
      }
    })
    .catch(err => {
      let errData = err;
      if (err instanceof Error) {
        errData = err.response.data;
      }
      localStorage.removeItem('userToken');
      dispatch(authFetchError(errData));
    })
    .finally(() => {
      dispatch(globalFetchFinish());
    });
};

  export const registerOperation = userData => dispatch => {
    dispatch(registerStart());

    authRegister(userData)
      .then(res => {
        let errData = res;
        if (res.data.status === 'error') {
          errData = res.response.data;
        }
        dispatch(registerError(errData));
        dispatch(registerSuccess(res.data));
        localStorage.setItem('userToken', res.data.user.token);
      })
      .catch(err => {
        const errData = err;
        toast.error('Упс... =( проверьте введенные данные еще раз', 'error');
        dispatch(registerError(errData));
      });
  };

  export const loginOperation = userData => dispatch => {
    dispatch(loginStart());

    authLogin(userData)
      .then(res => {
        localStorage.setItem('userToken', res.data.user.token);
        dispatch(loginSuccess(res.data));
      })
      .catch(error => {
        toast.error(
          'Упс... =( возможно Вы ввели не верную почту или пароль',
          'error',
        );
        dispatch(loginError(error));
      });
  };
