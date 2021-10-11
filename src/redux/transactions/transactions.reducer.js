import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  fetchTransactionsRequest,
  fetchTransactionsSuccess,
  fetchTransactionsError,
  addTransactionRequest,
  addTransactionSuccess,
  addTransactionError,
  deleteTransactionRequest,
  deleteTransactionSuccess,
  deleteTransactionError,
  filterTransactions,
} from "./transactions.actions";

const items = createReducer([], {
  [fetchTransactionsSuccess]: (state, { payload }) => payload.transactions,

  [addTransactionSuccess]: (state, { payload }) =>
    state.map((transaction) => transaction.name).includes(payload.name)
      ? alert(`${payload.name} is already in transactions.`)
      : [payload, ...state],

  [deleteTransactionSuccess]: (state, { payload }) =>
    state.filter((transaction) => transaction.id !== payload),
});

const loading = createReducer(false, {
  [fetchTransactionsRequest]: () => true,
  [fetchTransactionsSuccess]: () => false,
  [fetchTransactionsError]: () => false,

  [addTransactionRequest]: () => true,
  [addTransactionSuccess]: () => false,
  [addTransactionError]: () => false,

  [deleteTransactionRequest]: () => true,
  [deleteTransactionSuccess]: () => false,
  [deleteTransactionError]: () => false,
});

const filter = createReducer("", {
  [filterTransactions]: (state, { payload }) => payload,
});

const error = createReducer(null, {});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
