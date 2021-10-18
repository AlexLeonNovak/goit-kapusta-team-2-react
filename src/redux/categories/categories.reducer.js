import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as categoriesActions from './categories.actions';

const items = createReducer([], {
  [categoriesActions.fetchCategorySuccess]: (_, { payload }) => payload,
  [categoriesActions.addCategorySuccess]: (state, { payload }) => [payload, ...state],
  [categoriesActions.deleteCategorySuccess]: (state, { payload }) =>
    state.filter(({ _id }) => _id !== payload),
});

const isLoadingAction = action => action.type.endsWith('Request');
const isEndLoadingAction = action =>
  action.type.endsWith('Success') || action.type.endsWith('Error');

const loading = createReducer(false, builder => {
  builder
    .addMatcher(isLoadingAction, () => true)
    .addMatcher(isEndLoadingAction, () => false);
});

const filter = createReducer('', {
  [categoriesActions.filterCategory]: (_, { payload }) => payload,
});

const error = createReducer(null, {});

export const categoriesReducer = combineReducers({ items, filter, loading, error });
