import { createAction } from '@reduxjs/toolkit';
//import shortid from "shortid";

export const fetchBalanceRequest = createAction('balance/fetchBalanceRequest');
export const fetchBalanceSuccess = createAction('Balance/fetchBalanceSuccess');
export const fetchBalanceError = createAction('balance/fetchBalanceError');

export const updateBalanceRequest = createAction('balance/updateBalanceRequest');
export const updateBalanceSuccess = createAction('balance/updateBalanceSuccess');
export const updateBalanceError = createAction('balance/updateBalanceError');

