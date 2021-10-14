import { createSelector } from "@reduxjs/toolkit";
import { categoryTypes } from '../../helpers/constants';

// export const getLoading = (state) => state.transactions.loading;
// export const getFilter = (state) => state.transactions.filter;

export const getAllTransactions = (state) => state.transactions.items;

export const getIncomeTransactions = createSelector(
  [getAllTransactions],
  (transactions) => transactions.filter(transaction => transaction.category.type === categoryTypes.INCOME)
);

export const getIncomeSum = createSelector(
	[getIncomeTransactions],
	(transactions) => transactions.reduce((acc, transaction) => acc + transaction.amount, 0)
);

export const getExpenseTransactions = createSelector(
	[getAllTransactions],
	(transactions) => transactions.filter(transaction => transaction.category.type === categoryTypes.EXPENSE)
);

export const getExpenseSum = createSelector(
	[getExpenseTransactions],
	(transactions) => transactions.reduce((acc, transaction) => acc + transaction.amount, 0)
);

export const getTransactionsByCategory = (id) => createSelector(
	[getAllTransactions],
	(transactions) => transactions.filter(transaction => transaction.category._id === id)
);
