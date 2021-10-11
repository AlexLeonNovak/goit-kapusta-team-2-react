import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import authActions from "./auth.actions";

const initialUserState = { email: null };

const user = createReducer(initialUserState, {
  [authActions.registerSuccess]: () => initialUserState,
  [authActions.loginSuccess]: (_, { payload }) => payload.user,
  [authActions.googleAuthSuccess]: (_, { payload }) => payload.user,
  [authActions.logoutSuccess]: () => initialUserState,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [authActions.registerSuccess]: () => null,
  [authActions.loginSuccess]: (_, { payload }) => payload.token,
  [authActions.googleAuthSuccess]: (_, { payload }) => payload.token,
  [authActions.logoutSuccess]: () => null,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [authActions.registerError]: setError,
  [authActions.loginError]: setError,
  [authActions.logoutError]: setError,
  [authActions.getCurrentUserError]: setError,
  [authActions.googleAuthError]: setError,
});

const isAuthenticated = createReducer(false, {
  [authActions.registerSuccess]: () => false,
  [authActions.loginSuccess]: () => true,
  [authActions.getCurrentUserSuccess]: () => true,
  [authActions.googleAuthSuccess]: () => true,
  [authActions.registerError]: () => false,
  [authActions.loginError]: () => false,
  [authActions.getCurrentUserError]: () => false,
  [authActions.logoutSuccess]: () => false,
  [authActions.googleAuthError]: () => false
});

export default combineReducers({
  user,
  isAuthenticated,
  token,
  error,
});
