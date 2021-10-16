import {combineReducers} from 'redux';
import {createReducer} from '@reduxjs/toolkit';
import * as userActions from './user.actions';

const balanceReducer = createReducer(0, {
	[userActions.getCurrentUserSuccess]: (_, {payload}) => payload.user.balance,
	[userActions.updateBalanceSuccess]: (_, {payload}) => payload.user.balance,

});

const loadingReducer = createReducer(false, {
	[userActions.getCurrentUserRequest]: () => true,
	[userActions.getCurrentUserSuccess]: () => false,
	[userActions.getCurrentUserError]: () => false,
	[userActions.updateBalanceRequest]: () => true,
	[userActions.updateBalanceSuccess]: () => false,
	[userActions.updateBalanceError]: () => false,

});

const infoReducer = createReducer({}, {
	[userActions.getCurrentUserSuccess]: (_, {payload: {user : { email, id }}}) => ({email, id}),
});

const error = createReducer(null, {});

export const userReducer = combineReducers({
	balance: balanceReducer,
	loading: loadingReducer,
	info: infoReducer,
	error,
});

