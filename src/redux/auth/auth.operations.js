import axios from 'axios';
import authActions from './auth.actions';

axios.defaults.baseURL = 'https://goit-kapusta-team-2-api.herokuapp.com/api/v1';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};


const register = credentials => async dispatch => {
  dispatch(authActions.registerRequest());

  try {
    const response = await axios.post('/auth/registration', credentials);

    token.set(response.data.data.token);
    dispatch(authActions.registerSuccess(response.data.data));
  } catch (error) {
    dispatch(authActions.registerError(error.message));
  }
};


const logIn = credentials => async dispatch => {
  dispatch(authActions.loginRequest());

  try {
    const response = await axios.post('/auth/login', credentials);

    token.set(response.data.data.token);
    dispatch(authActions.loginSuccess(response.data.data));
  } catch (error) {
    dispatch(authActions.loginError(error.message));
  }
};


const logOut = () => async dispatch => {
  dispatch(authActions.logoutRequest());

  try {
    await axios.post('/auth/logout');

    token.unset();
    dispatch(authActions.logoutSuccess());
  } catch (error) {
    dispatch(authActions.logoutError(error.message));
  }
};


const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());

  try {
    const response = await axios.get('/auth/current');

    dispatch(authActions.getCurrentUserSuccess(response.data.data));
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error.message));
  }
};

export default { register, logOut, logIn, getCurrentUser };
