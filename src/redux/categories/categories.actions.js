import { createAction } from '@reduxjs/toolkit';

export const fetchCategoryRequest = createAction('categories/fetchCategoryRequest');
export const fetchCategorySuccess = createAction('categories/fetchCategorySuccess');
export const fetchCategoryError = createAction('categories/fetchCategoryError');

export const addCategoryRequest = createAction('categories/addCategoryRequest');
export const addCategorySuccess = createAction('categories/addCategorySuccess');
export const addCategoryError = createAction('categories/addCategoryError');

export const deleteCategoryRequest = createAction('categories/deleteCategoryRequest');
export const deleteCategorySuccess = createAction('categories/deleteCategorySuccess');
export const deleteCategoryError = createAction('categories/deleteCategoryError');

// export const changeFilter = createAction('categories/changeFilter');
export const filterCategory = createAction("categories/Filter");
