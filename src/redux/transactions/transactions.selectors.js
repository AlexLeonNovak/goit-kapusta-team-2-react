import { createSelector } from "@reduxjs/toolkit";

// export const getLoading = (state) => state.transactions.loading;
// export const getFilter = (state) => state.transactions.filter;

const getAllTransactions = (state) => state.transactions.items;

export const getIncomeTransactions = createSelector(
  [getAllTransactions],
  (transactions, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return transactions.filter((transaction) =>
      transaction.name.toLowerCase().includes(normalizedFilter)
    );
  }
);

export default { getIncomeTransactions };
