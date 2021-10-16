import {combineReducers} from 'redux';
import {createReducer} from '@reduxjs/toolkit';
import * as userActions from './user.actions';

const balance = createReducer(0, {
	[userActions.getCurrentUserSuccess]: (_, {payload}) => payload.user.balance,
	[userActions.updateBalanceSuccess]: (_, {payload}) => payload.user.balance,
});

const isLoadingAction = action => action.type.endsWith('Request');
const isEndLoadingAction = action =>
	action.type.endsWith('Success') || action.type.endsWith('Error');

const loading = createReducer(false, builder => {
	builder
		.addMatcher(isLoadingAction, () => true)
		.addMatcher(isEndLoadingAction, () => false);
});

const info = createReducer({}, {
	[userActions.getCurrentUserSuccess]: (_, {payload: {user : { email, id }}}) => ({email, id}),
});

const error = createReducer(null, {});

export const userReducer = combineReducers({
	balance,
	loading,
	info,
	error,
});

