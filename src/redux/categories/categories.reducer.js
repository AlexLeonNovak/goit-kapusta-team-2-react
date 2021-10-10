import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addCategorySuccess,
  deleteCategorySuccess,
  changeFilter,
  fetchCategorySuccess,
} from './categories.actions';

const items = createReducer([], {
  [fetchCategorySuccess]: (_, { payload }) => payload,
  [addCategorySuccess]: (state, { payload }) => [...state, payload],
  [deleteCategorySuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {});

export default combineReducers({ items, filter, error });
