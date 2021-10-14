import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchCategoryRequest,
  fetchCategorySuccess,
  fetchCategoryError,
  addCategoryRequest,
  addCategorySuccess,
  addCategoryError,
  deleteCategoryRequest,
  deleteCategorySuccess,
  deleteCategoryError,
  filterCategory,
} from './categories.actions';

const items = createReducer([], {
  [fetchCategorySuccess]: (_, { payload }) => payload,
  [addCategorySuccess]: (state, { payload }) => [...state, payload],
  [deleteCategorySuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [fetchCategoryRequest]: () => true,
  [fetchCategorySuccess]: () => false,
  [fetchCategoryError]: () => false,

  [addCategoryRequest]: () => true,
  [addCategorySuccess]: () => false,
  [addCategoryError]: () => false,

  [deleteCategoryRequest]: () => true,
  [deleteCategorySuccess]: () => false,
  [deleteCategoryError]: () => false,
});

const filter = createReducer('', {
  [filterCategory]: (_, { payload }) => payload,
});

const error = createReducer(null, {});

export default combineReducers({ items, filter, loading, error });
