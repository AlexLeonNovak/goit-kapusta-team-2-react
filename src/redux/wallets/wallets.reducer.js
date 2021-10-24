import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as walletsActions from './wallets.actions';

const items = createReducer([], {
  [walletsActions.fetchWalletSuccess]: (_, { payload }) => payload,
  [walletsActions.addWalletSuccess]: (state, { payload }) => [payload, ...state],
  [walletsActions.deleteWalletSuccess]: (state, { payload }) =>
    state.filter(({ _id }) => _id !== payload),
});

const isLoadingAction = action => action.type.startsWith('wallets') && action.type.endsWith('Request');
const isEndLoadingAction = action => action.type.startsWith('wallets') &&
  (action.type.endsWith('Success') || action.type.endsWith('Error'));

const loading = createReducer(false, builder => {
  builder
    .addMatcher(isLoadingAction, () => true)
    .addMatcher(isEndLoadingAction, () => false);
});

const filter = createReducer('', {
  [walletsActions.filterWallet]: (_, { payload }) => payload,
});

const isNoErrorAction = action => action.type.startsWith('wallets') &&
  (action.type.endsWith('Request') || action.type.endsWith('Success'));
const isErrorAction = action => action.type.startsWith('wallets') && action.type.endsWith('Error');

const error = createReducer(null, builder => {
  builder
    .addMatcher(isNoErrorAction, () => null)
    .addMatcher(isErrorAction, (_, {payload}) => payload.message);
});

export const walletsReducer = combineReducers({ items, filter, loading, error });
