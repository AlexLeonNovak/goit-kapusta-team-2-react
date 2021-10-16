import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import * as transactionsActions from "./transactions.actions";

const items = createReducer([], {
  [transactionsActions.fetchTransactionsSuccess]: (state, { payload }) => payload.transactions,

  [transactionsActions.addTransactionSuccess]: (state, { payload }) =>
    state.map((transaction) => transaction.name).includes(payload.name)
      ? alert(`${payload.name} is already in transactions.`)
      : [payload, ...state],

  [transactionsActions.deleteTransactionSuccess]: (state, { payload }) =>
    state.filter((transaction) => transaction.id !== payload),
});

const summary = createReducer([], {
  [transactionsActions.transactionsSummarySuccess]: (_, {payload}) => payload
});

const isLoadingAction = action => action.type.endsWith('Request');
const isEndLoadingAction = action =>
  action.type.endsWith('Success') || action.type.endsWith('Error');

const loading = createReducer(false, builder => {
  builder
    .addMatcher(isLoadingAction, () => true)
    .addMatcher(isEndLoadingAction, () => false);
});

const filter = createReducer("", {
  [transactionsActions.filterTransactions]: (state, { payload }) => payload,
});

const error = createReducer(null, {});

export const transactionsReducer = combineReducers({
  items,
  summary,
  filter,
  loading,
  error,
});
