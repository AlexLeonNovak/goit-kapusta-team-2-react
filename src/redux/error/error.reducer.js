import {createReducer} from '@reduxjs/toolkit';

const capitalize = s => (s && `${s[0].toUpperCase()}${s.slice(1)}`) || ""

const isNoErrorAction = action => action.type.endsWith('Request') || action.type.endsWith('Success');
const isErrorAction = action => action.type.endsWith('Error');

export const errorReducer = createReducer(null, builder => {
	builder
		.addMatcher(isNoErrorAction, () => null)
		.addMatcher(isErrorAction, (_, {type, payload}) => {
			const [block,] = type.split('/');
			return `${capitalize(block)} error: ${payload}`;
		});
});
