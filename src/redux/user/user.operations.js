import axios from 'axios';
import {
  updateBalanceRequest,
  updateBalanceSuccess,
  updateBalanceError,
  fetchBalanceRequest,
  fetchBalanceSuccess,
  fetchBalanceError,
} from './user.actions';

//axios.defaults.baseURL = 'http://localhost:3000';

 export const fetchBalance = () => async dispatch => {
  dispatch(fetchBalanceRequest());
  axios
    .get('/balance')
    .then(({ data }) => dispatch(fetchBalanceSuccess(data)))
    .catch(error => dispatch(fetchBalanceError(error.message)));
};

 export const updateBalance = ({ email}) => dispatch => {
   const balance = { email };
   
    dispatch(updateBalanceRequest());
    axios
      .patch('/balance', balance)
      .then(({ data }) => dispatch(updateBalanceSuccess(data)))
      .catch(error => dispatch(updateBalanceError(error.message)));
  };

