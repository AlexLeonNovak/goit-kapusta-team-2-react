import axios from "axios";
import {
  fetchTransactionsRequest,
  fetchTransactionsSuccess,
  fetchTransactionsError,
  addTransactionRequest,
  addTransactionSuccess,
  addTransactionError,
  deleteTransactionRequest,
  deleteTransactionSuccess,
  deleteTransactionError,
} from "./transactions.actions";

const fetchTransactions = () => async (dispatch) => {
  dispatch(fetchTransactionsRequest());

  try {
    const { data } = await axios.get("/transactions");
    dispatch(fetchTransactionsSuccess(data.data));
  } catch (error) {
    dispatch(fetchTransactionsError(error.message));
  }
};

const addTransaction = (transaction) => async (dispatch) => {
  // const transaction = { description, category };

  dispatch(addTransactionRequest);

  try {
    const { data } = await axios.post("/transactions", transaction);
    dispatch(addTransactionSuccess(data));
  } catch (error) {
    dispatch(addTransactionError(error.message));
  }
};

const deleteTransaction = (transactionId) => async (dispatch) => {
  dispatch(deleteTransactionRequest());

  try {
    await axios.delete(`/transactions/${transactionId}`);
    dispatch(deleteTransactionSuccess(transactionId));
  } catch (error) {
    dispatch(deleteTransactionError(error.message));
  }
};

// const transactionsOperations = { addTransaction, deleteTransaction, fetchTransactions };

export default { addTransaction, deleteTransaction, fetchTransactions };
