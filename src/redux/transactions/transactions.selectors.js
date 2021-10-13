import { createSelector } from "@reduxjs/toolkit";

// export const getLoading = (state) => state.transactions.loading;
// export const getFilter = (state) => state.transactions.filter;

export const getAllTransactions = (state) => state.transactions.items;

// export const getIncomeTransactions = createSelector(
//   [getAllTransactions],
//   (transactions) => {
//     return transactions.filter((transaction) =>
//       transaction.name.toLowerCase().includes(normalizedFilter)
//     );
//   }
// );
