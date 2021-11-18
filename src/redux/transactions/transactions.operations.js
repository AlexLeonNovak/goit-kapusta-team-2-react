import axios from "axios";
import queryString from 'query-string';
import { transactionsActions } from "./index";
import { toastActions } from '../toast'

export const fetchTransactions = (query) => async (dispatch) => {
  dispatch(transactionsActions.fetchTransactionsRequest());

  try {
    const { data } = await axios.get(`/transactions?${queryString.stringify(query)}`);
    dispatch(transactionsActions.fetchTransactionsSuccess(data.data));
  } catch (error) {
    dispatch(transactionsActions.fetchTransactionsError(error.message));
    dispatch(toastActions.errorMessage('Transactions fetch error'));
  }
};

export const addTransaction = (transaction) => async (dispatch) => {
  dispatch(transactionsActions.addTransactionRequest());

  try {
    const { data } = await axios.post("/transactions", transaction);
    dispatch(transactionsActions.addTransactionSuccess(data.data));
    dispatch(fetchSummary());
    dispatch(toastActions.successMessage('Транзакция успешно добавлена'))
  } catch (error) {
    dispatch(transactionsActions.addTransactionError(error.message));
    dispatch(toastActions.errorMessage('Add transaction error'));
  }
};

export const deleteTransaction = (transactionId) => async (dispatch) => {
  dispatch(transactionsActions.deleteTransactionRequest());

  try {
    await axios.delete(`/transactions/${transactionId}`);
    dispatch(transactionsActions.deleteTransactionSuccess(transactionId));
    dispatch(fetchSummary())
    dispatch(toastActions.successMessage('Транзакция успешно удалена'))
  } catch (error) {
    dispatch(transactionsActions.deleteTransactionError(error.message));
    dispatch(toastActions.errorMessage('Delete transaction error'));
  }
};

export const fetchSummary = () => async dispatch =>{
  dispatch(transactionsActions.transactionsSummaryRequest());

  try {
    const response = await axios.get('/transactions/summary');
    dispatch(transactionsActions.transactionsSummarySuccess(response.data.data));
  } catch (error) {
    dispatch(transactionsActions.transactionsSummaryError(error));
    dispatch(toastActions.errorMessage('Fetch summary transaction error'));
  }
}
