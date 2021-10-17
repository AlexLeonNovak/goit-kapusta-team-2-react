import { createAction } from '@reduxjs/toolkit';
//import shortid from "shortid";

export const getCurrentUserRequest = createAction('user/getCurrentUserRequest');
export const getCurrentUserSuccess = createAction('user/getCurrentUserSuccess');
export const getCurrentUserError = createAction('user/getCurrentUserError');

export const updateBalanceRequest = createAction('user/updateBalanceRequest');
export const updateBalanceSuccess = createAction('user/updateBalanceSuccess');
export const updateBalanceError = createAction('user/updateBalanceError');

