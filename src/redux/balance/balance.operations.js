import axios from "axios";
import {
  addBalanceRequest,
  addBalanceSuccess,
  addBalanceError,
  fetchBalanceRequest,
  fetchBalanceSuccess,
  fetchBalanceError,
} from "./balance.actions";

const fetchBalance = () => async (dispatch) => {
  dispatch(fetchBalanceRequest());

  try {
    const { data } = await axios.get("/user/current");
    console.log(data);
    dispatch(fetchBalanceSuccess(data.user.balance));
  } catch (error) {
    dispatch(fetchBalanceError(error.message));
  }
};

const addBalance = (balance) => async (dispatch) => {
  dispatch(addBalanceRequest);

  try {
    const { data } = await axios.patch("/user", balance);
    console.log(data);
    dispatch(addBalanceSuccess(data));
  } catch (error) {
    dispatch(addBalanceError(error.message));
  }
};

export default { addBalance, fetchBalance };
