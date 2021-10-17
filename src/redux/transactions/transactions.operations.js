import axios from "axios";
import { transactionsActions } from "./index";
import { toast } from 'react-toastify';

export const fetchTransactions = () => async (dispatch) => {
  dispatch(transactionsActions.fetchTransactionsRequest());

  try {
    const { data } = await axios.get("/transactions");
    console.log(data);
    dispatch(transactionsActions.fetchTransactionsSuccess(data.data));
    // toast.success('Successful operation')
  } catch (error) {
    dispatch(transactionsActions.fetchTransactionsError(error.message));
    toast.error('fuck')
  }
};

export const addTransaction = (transaction) => async (dispatch) => {
  dispatch(transactionsActions.addTransactionRequest);

  try {
    const { data } = await axios.post("/transactions", transaction);
    dispatch(transactionsActions.addTransactionSuccess(data.data));
    // toast.success('Successful operation')
    dispatch(fetchSummary())
  } catch (error) {
    dispatch(transactionsActions.addTransactionError(error.message));
    toast.error('fuck')
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
    // toast.success('Successful operation')
  } catch (error) {
    dispatch(transactionsActions.transactionsSummaryError(error));
    toast.error('fuck')
  }
}
