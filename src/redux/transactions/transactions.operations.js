import axios from "axios";
import { transactionsActions } from "./index";

export const fetchTransactions = () => async (dispatch) => {
  dispatch(transactionsActions.fetchTransactionsRequest());

  try {
    const { data } = await axios.get("/transactions");
    dispatch(transactionsActions.fetchTransactionsSuccess(data.data));
  } catch (error) {
    dispatch(transactionsActions.fetchTransactionsError(error.message));
  }
};

export const addTransaction = (transaction) => async (dispatch) => {
  dispatch(transactionsActions.addTransactionRequest);

  try {
    const { data } = await axios.post("/transactions", transaction);
    dispatch(transactionsActions.addTransactionSuccess(data));
  } catch (error) {
    dispatch(transactionsActions.addTransactionError(error.message));
  }
};

export const deleteTransaction = (transactionId) => async (dispatch) => {
  dispatch(transactionsActions.deleteTransactionRequest());

  try {
    await axios.delete(`/transactions/${transactionId}`);
    dispatch(transactionsActions.deleteTransactionSuccess(transactionId));
  } catch (error) {
    dispatch(transactionsActions.deleteTransactionError(error.message));
  }
};

export const fetchSummary = () => async dispatch =>{
  dispatch(transactionsActions.transactionsSummaryRequest());

  try {
    const response = await axios.get('/transactions/summary');
    dispatch(transactionsActions.transactionsSummarySuccess(response.data.data));
  } catch (e) {
    dispatch(transactionsActions.transactionsSummaryError(e));
  }
}
