import axios from "axios";
import * as authActions from "./auth.actions";
import { toastActions } from '../toast'

axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}/api/v1`;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = (credentials) => async (dispatch) => {
  dispatch(authActions.registerRequest());

  try {
    await axios.post("/auth/registration", credentials);
    dispatch(toastActions.successMessage('🚀 Register success'));

    dispatch(authActions.registerSuccess());
  } catch (error) {
    dispatch(authActions.registerError(error.message));
    dispatch(toastActions.errorMessage('Wrong email or password'));
  }
};

export const logIn = (credentials) => async (dispatch) => {
  dispatch(authActions.loginRequest());

  try {
    const response = await axios.post("/auth/login", credentials);

    token.set(response.data.data.token);
    dispatch(authActions.loginSuccess(response.data.data));
  } catch (error) {
    const message = error.response?.data;
    dispatch(authActions.loginError(message || error.message));
    dispatch(toastActions.errorMessage(message || error.message));
  }
};

export const logOut = () => async (dispatch) => {
  dispatch(authActions.logoutRequest());

  try {
    await axios.get("/auth/logout");

    token.unset();
    dispatch(authActions.logoutSuccess());
  } catch (error) {
    dispatch(authActions.logoutError(error.message));
  }
};


export const googleAuth = (tokenId) => async (dispatch) => {
  dispatch(authActions.googleAuthRequest());

  try {
    const response = await axios.post("/auth/google", { tokenId });
    token.set(response.data.data.token);
    dispatch(authActions.googleAuthSuccess(response.data.data));
  } catch (error) {
    const message = error.response?.data;
    dispatch(authActions.googleAuthError(message || error.message));
    dispatch(toastActions.errorMessage(message || error.message));
  }
};

