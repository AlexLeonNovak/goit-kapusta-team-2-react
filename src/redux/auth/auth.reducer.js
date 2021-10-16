import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import * as authActions from "./auth.actions";

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
  [authActions.googleAuthError]: setError,
});

const isAuthenticated = createReducer(false, {
  [authActions.registerSuccess]: () => false,
  [authActions.loginSuccess]: () => true,
  [authActions.googleAuthSuccess]: () => true,
  [authActions.registerError]: () => false,
  [authActions.loginError]: () => false,
  [authActions.logoutSuccess]: () => false,
  [authActions.googleAuthError]: () => false
});

export const authReducer = combineReducers({
  isAuthenticated,
  token,
  error,
});
