import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  fetchBalanceRequest,
  fetchBalanceSuccess,
  fetchBalanceError,
  addBalanceRequest,
  addBalanceSuccess,
  addBalanceError,
} from "./balance.actions";

const initialBalanceState = 0;

const userBalance = createReducer(initialBalanceState, {
  [fetchBalanceSuccess]: (_, { payload }) => payload,
  [addBalanceSuccess]: (state, { payload }) => [...state, payload],
});

const loading = createReducer(false, {
  [fetchBalanceRequest]: () => true,
  [fetchBalanceSuccess]: () => false,
  [fetchBalanceError]: () => false,

  [addBalanceRequest]: () => true,
  [addBalanceSuccess]: () => false,
  [addBalanceError]: () => false,
});

const error = createReducer(null, {});

export default combineReducers({
  userBalance,
  loading,
  error,
});
