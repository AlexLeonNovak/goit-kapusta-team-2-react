import { createSelector } from '@reduxjs/toolkit';
import { categoryTypes } from '../../helpers/constants';

export const getAllCategories = state => state.categories.items;

export const getIncomeCategories = createSelector(
  [getAllCategories],
  categories => categories.filter((category) => category.type === categoryTypes.INCOME)
);

export const getExpenseCategories = createSelector(
  [getAllCategories],
  categories => categories.filter((category) => category.type === categoryTypes.EXPENSE)
);

export const getLoading = state => state.wallets.loading;

