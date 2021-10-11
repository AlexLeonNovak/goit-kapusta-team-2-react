import { createSelector } from '@reduxjs/toolkit';

const getFilter = state => state.categories.filter;

const getAllCategories = state => state.categories.items;

const getVisibleCategories = createSelector(
  [getAllCategories, getFilter],
  (categories, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return categories.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);

export default {
  getFilter,
  getVisibleCategories,
};
