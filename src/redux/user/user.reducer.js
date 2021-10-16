import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

//import { changeFilter, addBalance, deleteBalance } from './Balances-actions';

import {
  updateBalanceRequest,
  updateBalanceSuccess,
  updateBalanceError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from './user.actions';

const balanceReducer = createReducer([], {
  [getCurrentUserSuccess]: (_, { payload }) => payload,
  [updateBalanceSuccess]: (_, { payload }) => payload,
 
});

const loadingReducer = createReducer(false, {
  [getCurrentUserRequest]: () => true,
  [getCurrentUserSuccess]: () => false,
  [getCurrentUserError]: () => false,
  [updateBalanceRequest]: () => true,
  [updateBalanceSuccess]: () => false,
  [updateBalanceError]: () => false,

});

const infoReducer = createReducer([], {
  [getCurrentUserSuccess]: (_, { payload }) => payload,
  
});

const error = createReducer(null, {});

 export const userReducer = combineReducers({
  balance: balanceReducer,
  loading: loadingReducer,
  info: infoReducer,
  error,
});

