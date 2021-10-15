import { createAction } from "@reduxjs/toolkit";

export const fetchBalanceRequest = createAction("balance/fetchBalanceRequest");
export const fetchBalanceSuccess = createAction("balance/fetchBalanceSuccess");
export const fetchBalanceError = createAction("balance/fetchBalanceError");

export const addBalanceRequest = createAction("balance/addBalanceRequest");
export const addBalanceSuccess = createAction("balance/addBalanceSuccess");
export const addBalanceError = createAction("balance/addBalanceError");
