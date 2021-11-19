import { createAction } from '@reduxjs/toolkit';

export const getCurrentUserRequest = createAction('user/getCurrentUserRequest');
export const getCurrentUserSuccess = createAction('user/getCurrentUserSuccess');
export const getCurrentUserError = createAction('user/getCurrentUserError');


