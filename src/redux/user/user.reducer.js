import {combineReducers} from 'redux';
import {createReducer} from '@reduxjs/toolkit';
import * as userActions from './user.actions';

const isLoadingAction = action => action.type.startsWith('user') && action.type.endsWith('Request');
const isEndLoadingAction = action => action.type.startsWith('user') &&
	(action.type.endsWith('Success') || action.type.endsWith('Error'));

const loading = createReducer(false, builder => {
	builder
		.addMatcher(isLoadingAction, () => true)
		.addMatcher(isEndLoadingAction, () => false);
});

const info = createReducer({}, {
	[userActions.getCurrentUserSuccess]: (_, {payload: {user : { email, id }}}) => ({email, id}),
});

export const userReducer = combineReducers({
	loading,
	info,
});

