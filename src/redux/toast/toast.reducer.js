import {createReducer} from '@reduxjs/toolkit';
import * as toastActions from './toast.actions';

export const toastReducer = createReducer(null, {
	[toastActions.errorMessage]: (_, {payload}) => ({message: payload, type: 'error'}),
	[toastActions.successMessage]: (_, {payload}) => ({message: payload, type: 'success'}),
})
