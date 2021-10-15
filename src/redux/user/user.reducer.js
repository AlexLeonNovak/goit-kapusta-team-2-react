import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

//import { changeFilter, addBalance, deleteBalance } from './Balances-actions';

import {
  updateBalanceRequest,
  updateBalanceSuccess,
  updateBalanceError,
  fetchBalanceRequest,
  fetchBalanceSuccess,
  fetchBalanceError,
} from './user.actions';

const itemsReducer = createReducer([], {
  [fetchBalanceSuccess]: (_, { payload }) => payload,
  [updateBalanceSuccess]: (_, { payload }) => payload,
 
});

const loadingReducer = createReducer(false, {
  [fetchBalanceRequest]: () => true,
  [fetchBalanceSuccess]: () => false,
  [fetchBalanceError]: () => false,
  [updateBalanceRequest]: () => true,
  [updateBalanceSuccess]: () => false,
  [updateBalanceError]: () => false,

 
});


const error = createReducer(null, {});

const balanceReducer = combineReducers({
  items: itemsReducer,
  loading: loadingReducer,
  error,
});


export default balanceReducer;