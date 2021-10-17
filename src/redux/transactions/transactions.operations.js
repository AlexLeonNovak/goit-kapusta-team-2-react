import axios from "axios";
import queryString from 'query-string';
import { transactionsActions } from "./index";

export const fetchTransactions = (query) => async (dispatch) => {
  dispatch(transactionsActions.fetchTransactionsRequest());

  try {
    const { data } = await axios.get(`/transactions?${queryString.stringify(query)}`);
    dispatch(transactionsActions.fetchTransactionsSuccess(data.data));
  } catch (error) {
    dispatch(transactionsActions.fetchTransactionsError(error.message));
  }
};

export const addTransaction = (transaction) => async (dispatch) => {
  dispatch(transactionsActions.addTransactionRequest);

  try {
    const { data } = await axios.post("/transactions", transaction);
    dispatch(transactionsActions.addTransactionSuccess(data.data));
    dispatch(fetchSummary())
  } catch (error) {
    dispatch(transactionsActions.addTransactionError(error.message));
  }
};

export const deleteTransaction = (transactionId) => async (dispatch) => {
  dispatch(transactionsActions.deleteTransactionRequest());

  try {
    await axios.delete(`/transactions/${transactionId}`);
    dispatch(transactionsActions.deleteTransactionSuccess(transactionId));
    dispatch(fetchSummary())
  } catch (error) {
    dispatch(transactionsActions.deleteTransactionError(error.message));
  }
};

export const fetchSummary = () => async dispatch =>{
  dispatch(transactionsActions.transactionsSummaryRequest());

  try {
    const response = await axios.get('/transactions/summary');
    dispatch(transactionsActions.transactionsSummarySuccess(response.data.data));
  } catch (error) {
    dispatch(transactionsActions.transactionsSummaryError(error));
  }
}
