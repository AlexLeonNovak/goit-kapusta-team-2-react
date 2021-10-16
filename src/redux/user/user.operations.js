import axios from 'axios';
import {
  updateBalanceRequest,
  updateBalanceSuccess,
  updateBalanceError,
 getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from './user.actions';


//axios.defaults.baseURL = 'http://localhost:3000';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

 export const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(getCurrentUserRequest());
  try {
    const response = await axios.get('/user/current');

    dispatch(getCurrentUserSuccess(response.data.data));
  } catch (error) {
    dispatch(getCurrentUserError(error.message));
  }
};

export const updateBalance = (balance) => async (dispatch) => {
   
  dispatch(updateBalanceRequest());
  try {
    const response = await axios.patch('/user', balance)
    dispatch(updateBalanceSuccess(response.data.data))
  }

  catch (error) {
    dispatch(updateBalanceError(error.message))
  }
}