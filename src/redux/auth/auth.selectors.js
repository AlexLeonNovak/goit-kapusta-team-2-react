const getIsAuthenticated = state => state.auth.isAuthenticated;
const getUserEmail = state => state.auth.user.email;
const getUserName = state => state.auth.user.name;
const getUserPassword = state => state.auth.user.password;


export default {
  getIsAuthenticated,
  getUserEmail,
  getUserPassword,
  getUserName
};