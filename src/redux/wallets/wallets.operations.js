import axios from 'axios';
import { walletsActions } from './index';

export const fetchWallets = () => async dispatch => {
  dispatch(walletsActions.fetchWalletRequest());

  try {
    const { data } = await axios.get('/wallets');
    dispatch(walletsActions.fetchWalletSuccess(data.data.wallets));
  } catch (error) {
    dispatch(walletsActions.fetchWalletError(error.message));
  }
};


export const addWallet = (wallet) => async (dispatch) => {

    dispatch(walletsActions.addWalletRequest());

    try {
      const { data } = await axios.post("/wallets", wallet);
      dispatch(walletsActions.addWalletSuccess(data.data.wallet));

    } catch (error) {
      dispatch(walletsActions.addWalletError(error.message));
    }
  };



export const deleteWallet = (walletId) => async (dispatch) => {
  dispatch(walletsActions.deleteWalletRequest());

  try {
    await axios.delete(`/wallets/${walletId}`);
    dispatch(walletsActions.deleteWalletSuccess(walletId));
  } catch (error) {
    dispatch(walletsActions.deleteWalletError(error.message));
  }
};

export const updateWallet = (id, wallet) => async (dispatch) => {
  dispatch(walletsActions.updateWalletRequest());

  try {
    await axios.patch(`/wallets/${id}`, wallet);
    dispatch(walletsActions.updateWalletSuccess(id, wallet));
  } catch (error) {
    dispatch(walletsActions.updateWalletError(error.message));
  }
};

