import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as walletsActions from './wallets.actions';
import {transactionsActions} from '../transactions';

const updateItems = (state, wallet) =>
  state.map( item => {
    if (item._id !== wallet._id) {
      return item
    }
    return { ...wallet }
  })

const items = createReducer([], {
  [walletsActions.fetchWalletSuccess]: (_, { payload }) => payload,
  [walletsActions.addWalletSuccess]: (state, { payload }) => [payload, ...state],
  [walletsActions.deleteWalletSuccess]: (state, { payload }) =>
    state.filter(({ _id }) => _id !== payload),

  [transactionsActions.addTransactionSuccess]: (state, { payload }) => updateItems(state, payload.result.wallet),
  [transactionsActions.deleteTransactionSuccess]: (state, { payload }) => updateItems(state, payload.transaction.wallet),
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


export const walletsReducer = combineReducers({ items, filter, loading });
