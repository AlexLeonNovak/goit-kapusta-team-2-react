import { createAction } from '@reduxjs/toolkit';

export const fetchCategoryRequest = createAction('Categories/fetchCategoryRequest');
export const fetchCategorySuccess = createAction('Categories/fetchCategorySuccess');
export const fetchCategoryError = createAction('Categories/fetchCategoryError');

export const addCategoryRequest = createAction('Categories/addCategoryRequest');
export const addCategorySuccess = createAction('Categories/addCategorySuccess');
export const addCategoryError = createAction('Categories/addCategoryError');

export const deleteCategoryRequest = createAction(
  'categories/deleteCategoryRequest',
);
export const deleteCategorySuccess = createAction(
  'categories/deleteCategorySuccess',
);
export const deleteCategoryError = createAction('categories/deleteCategoryError');

export const changeFilter = createAction('categories/changeFilter');
