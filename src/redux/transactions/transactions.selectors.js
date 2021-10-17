import { createSelector } from "@reduxjs/toolkit";
import { categoryTypes } from '../../helpers/constants';

// export const getLoading = (state) => state.transactions.loading;
// export const getFilter = (state) => state.transactions.filter;

export const getAllTransactions = (state) => state.transactions.items;

export const getIncomeTransactions = createSelector(
  [getAllTransactions],
  (transactions) => transactions.filter(transaction => {
	  console.log(transaction.category.type, transaction.category.type === categoryTypes.EXPENSE)
		return transaction.category.type === categoryTypes.INCOME
  })
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

export const getTransactionsByCategoryId = id => createSelector(
	[getAllTransactions],
	transactions => transactions.filter(transaction => transaction.category._id === id)
);

export const getTransactionById = id => createSelector(
	[getAllTransactions],
	transactions => transactions.find(transaction => transaction._id === id)
)

export const getSummary = state => state.transactions.summary;

// export const getSummaryExpense = createSelector(
// 	[getSummary],
// 	(transactions) => transactions.filter(transaction => )
// )
