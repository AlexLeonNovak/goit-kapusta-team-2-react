import { createAction } from '@reduxjs/toolkit';

export const errorMessage = createAction('toast/errorMessage');
export const successMessage = createAction('toast/successMessage');
