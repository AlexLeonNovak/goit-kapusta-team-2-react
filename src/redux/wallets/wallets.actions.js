import { createAction } from '@reduxjs/toolkit';

export const fetchWalletRequest = createAction('wallets/fetchWalletRequest');
export const fetchWalletSuccess = createAction('wallets/fetchWalletSuccess');
export const fetchWalletError = createAction('wallets/fetchWalletError');

export const addWalletRequest = createAction('wallets/addWalletRequest');
export const addWalletSuccess = createAction('wallets/addWalletSuccess');
export const addWalletError = createAction('wallets/addWalletError');

export const deleteWalletRequest = createAction('wallets/deleteWalletRequest');
export const deleteWalletSuccess = createAction('wallets/deleteWalletSuccess');
export const deleteWalletError = createAction('wallets/deleteWalletError');

// export const changeFilter = createAction('wallets/changeFilter');
export const filterWallet = createAction("wallets/Filter");
