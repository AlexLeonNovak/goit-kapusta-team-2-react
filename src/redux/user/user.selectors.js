import { createSelector } from '@reduxjs/toolkit';

export const getBalance = state => state.user.balance;

export const getEmail = state => state.user.info.email;

export const getFirstLetterOfEmail = createSelector (
	[getEmail],
	email => email && email[0].toUpperCase()
)
