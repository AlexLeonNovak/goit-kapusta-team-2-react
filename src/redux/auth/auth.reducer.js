import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import * as authActions from "./auth.actions";
import * as userActions from '../user/user.actions';

const token = createReducer(null, {
  [authActions.registerSuccess]: () => null,
  [authActions.loginSuccess]: (_, { payload }) => payload.token,
  [authActions.googleAuthSuccess]: (_, { payload }) => payload.token,
  [authActions.logoutSuccess]: () => null,

  [userActions.getCurrentUserError]: () => null,
});

const isAuthenticated = createReducer(false, {
  [authActions.registerSuccess]: () => false,
  [authActions.loginSuccess]: () => true,
  [authActions.googleAuthSuccess]: () => true,
  [authActions.registerError]: () => false,
  [authActions.loginError]: () => false,
  [authActions.logoutSuccess]: () => false,
  [authActions.googleAuthError]: () => false,

  [userActions.getCurrentUserSuccess]: () => true,
  [userActions.getCurrentUserError]: () => false,
});

export const authReducer = combineReducers({
  isAuthenticated,
  token,
});
