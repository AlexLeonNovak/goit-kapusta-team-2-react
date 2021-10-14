import { createSelector } from '@reduxjs/toolkit';

// const getFilter = state => state.categories.filter;

const getAllCategories = state => state.categories.items;

const getIncomeCategories = createSelector(
  [getAllCategories],
  categories => categories.filter((category) => {
    if (category.type === 'income') {
      return category.name
    }
  })
);

const getExpenseCategories = createSelector(
  [getAllCategories],
  categories => categories.filter((category) => {
    if (category.type === 'expense') {
      return category.name
    }
  })
);

// const getVisibleCategories = createSelector(
//   [getAllCategories],
//   (categories, filter) => {
//     const normalizedFilter = filter.toLowerCase();

//     return categories.filter((category) =>
//       category.toLowerCase().includes(normalizedFilter),
//     );
//   }
// );

export default {
  // getFilter,
  // getVisibleCategories,
  getAllCategories,
  getIncomeCategories,
  getExpenseCategories
};
