import axios from 'axios';
import { walletsActions } from './index';
import { toastActions } from '../toast'

export const fetchWallets = () => async dispatch => {
  dispatch(walletsActions.fetchWalletRequest());

  try {
    const { data } = await axios.get('/wallets');
    dispatch(walletsActions.fetchWalletSuccess(data.data.wallets));
  } catch (error) {
    dispatch(walletsActions.fetchWalletError(error.message));
    dispatch(toastActions.errorMessage('Wallets fetch error'));
  }
};


export const addWallet = (wallet) => async (dispatch) => {

    dispatch(walletsActions.addWalletRequest());

    try {
      const { data } = await axios.post("/wallets", wallet);
      dispatch(walletsActions.addWalletSuccess(data.data.wallet));
      dispatch(toastActions.successMessage('Счет успешно добавлен'));
    } catch (error) {
      dispatch(walletsActions.addWalletError(error.message));
      dispatch(toastActions.errorMessage(`Add wallet error: ${error.message}`));
    }
  };



export const deleteWallet = (walletId) => async (dispatch) => {
  dispatch(walletsActions.deleteWalletRequest());

  try {
    await axios.delete(`/wallets/${walletId}`);
    dispatch(walletsActions.deleteWalletSuccess(walletId));
    dispatch(toastActions.successMessage('Счет успешно удален'));
  } catch (error) {
    dispatch(walletsActions.deleteWalletError(error.message));
    dispatch(toastActions.errorMessage(`Delete wallet error: ${error.message}`));
  }
};

export const updateWallet = (id, wallet) => async (dispatch) => {
  dispatch(walletsActions.deleteWalletRequest());

  try {
    await axios.patch(`/wallets/${id}`, wallet);
    dispatch(walletsActions.deleteWalletSuccess(wallet));
  } catch (error) {
    dispatch(walletsActions.deleteWalletError(error.message));
    dispatch(toastActions.errorMessage(`Update wallet error: ${error.message}`));
  }
};

