import { createAction } from "@reduxjs/toolkit";

export const fetchTransactionsRequest = createAction("transactions/fetchTransactionsRequest");
export const fetchTransactionsSuccess = createAction("transactions/fetchTransactionsSuccess");
export const fetchTransactionsError = createAction("transactions/fetchTransactionsError");

export const addTransactionRequest = createAction("transactions/addTransactionRequest");
export const addTransactionSuccess = createAction("transactions/addTransactionSuccess");
export const addTransactionError = createAction("transactions/addTransactionError");

export const deleteTransactionRequest = createAction("transactions/deleteTransactionRequest");
export const deleteTransactionSuccess = createAction("transactions/deleteTransactionSuccess");
export const deleteTransactionError = createAction("transactions/deleteTransactionError");

export const filterTransactions = createAction("transactions/Filter");

export const transactionsSummaryRequest = createAction("transactions/transactionsSummaryRequest")
export const transactionsSummarySuccess = createAction("transactions/transactionsSummarySuccess")
export const transactionsSummaryError = createAction("transactions/transactionsSummaryError")
