import types from '../types';

export const globalFetchStart = () => ({
  type: types.GLOBAL_FETCH_START,
});

export const globalFetchFinish = () => ({
  type: types.GLOBAL_FETCH_FINISH,
});

export const globalFetchError = payload => ({
  type: types.GLOBAL_ERROR,
  payload,
});
