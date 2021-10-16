import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import * as transactionsActions from "./transactions.actions";

const items = createReducer([], {
  [transactionsActions.fetchTransactionsSuccess]: (state, { payload }) => payload.transactions,

  [transactionsActions.addTransactionSuccess]: (state, { payload }) => [payload.result, ...state],

  [transactionsActions.deleteTransactionSuccess]: (state, { payload }) =>
    state.filter((transaction) => transaction._id !== payload),
});

const summary = createReducer([], {
  [transactionsActions.transactionsSummarySuccess]: (_, {payload}) => payload.summary,
  [transactionsActions.addTransactionSuccess]: (state, { payload }) => {
    const date = new Date(payload.result.datetime);
    const idx = state.findIndex(item => item.year === date.getFullYear() && item.month === date.getMonth() + 1)
    state[idx][payload.result.category.type] += payload.result.amount;
    return state;
  },
  [transactionsActions.deleteTransactionSuccess]: (state, { payload }) => {
    // const date = new Date(payload.result.datetime);
    // const idx = state.findIndex(item => item.year === date.getFullYear() && item.month === date.getMonth() + 1)
    // state[idx][payload.result.category.type] -= payload.result.amount;
    return state;
  }
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
