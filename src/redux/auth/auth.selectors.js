const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUserEmail = state => state.auth.user.email;

const getUserPassword = state => state.auth.user.password;

export default {
  getIsAuthenticated,
  getUserEmail,
  getUserPassword
};