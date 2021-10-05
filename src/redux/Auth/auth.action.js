import types from '../types';

export const authFetchStart = () => ({
  type: types.AUTH_FETCH_START,
});
export const authFetchFinish = () => ({
  type: types.AUTH_FETCH_FINISH,
});
export const authFetchError = payload => ({
  type: types.AUTH_FETCH_ERROR,
  payload,
});
export const authFetchSuccess = payload => ({
  type: types.AUTH_FETCH_SUCCESS,
  payload,
});

export const registerStart = () => ({
  type: types.REGISTER_START,
});
export const registerSuccess = data => ({
  type: types.REGISTER_SUCCESS,
  payload: data,
});
export const registerError = error => ({
  type: types.REGISTER_ERROR,
  payload: error,
});

export const loginStart = () => ({
  type: types.LOGIN_START,
});
export const loginSuccess = data => ({
  type: types.LOGIN_SUCCESS,
  payload: data,
});
export const loginError = error => ({
  type: types.LOGIN_ERROR,
  payload: error,
});