import { createSelector } from '@reduxjs/toolkit';

export const getAllWallets = state => state.wallets.items;

export const getSumWallets = createSelector(
	[getAllWallets],
	wallets => wallets.reduce((acc, wallet) => acc + wallet.balance, 0)
)


export const getLoading = state => state.wallets.loading;

