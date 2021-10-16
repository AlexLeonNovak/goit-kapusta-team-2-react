import axios from "axios";
import authActions from "./auth.actions";

axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}/api/v1`;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = (credentials) => async (dispatch) => {
  dispatch(authActions.registerRequest());

  try {
    const response = await axios.post("/auth/registration", credentials);

    dispatch(authActions.registerSuccess());
  } catch (error) {
    dispatch(authActions.registerError(error.message));
  }
};

const logIn = (credentials) => async (dispatch) => {
  dispatch(authActions.loginRequest());

  try {
    const response = await axios.post("/auth/login", credentials);

    token.set(response.data.data.token);
    dispatch(authActions.loginSuccess(response.data.data));
  } catch (error) {
    dispatch(authActions.loginError(error.message));
  }
};

const logOut = () => async (dispatch) => {
  dispatch(authActions.logoutRequest());

  try {
    await axios.get("/auth/logout");

    token.unset();
    dispatch(authActions.logoutSuccess());
  } catch (error) {
    dispatch(authActions.logoutError(error.message));
  }
};


const googleAuth = (tokenId) => async (dispatch) => {
  dispatch(authActions.googleAuthRequest());

  try {
    const response = await axios.post("/auth/google", { tokenId });
    token.set(response.data.data.token);
    dispatch(authActions.googleAuthSuccess(response.data.data));
  } catch (error) {
    dispatch(authActions.googleAuthError(error.message));
  }
};

export default { register, logOut, logIn, googleAuth };
