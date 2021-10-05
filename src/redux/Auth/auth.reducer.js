import types from '../types';

const initialState = {
  isloged: false,
  isLoading: false,
  balance: 0,
  user: null,
  error: null,
};

const sessionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // Регистрация
    case types.REGISTER_START:
      return { ...state, error: null, isLoading: true };
    case types.REGISTER_SUCCESS:
      return {
        isloged: true,
        isLoading: false,
        balance: payload.balance,
        user: payload.user,
        error: null,
      };
    case types.REGISTER_ERROR:
      return {
        isloged: false,
        isLoading: false,
        balance: 0,
        user: null,
        error: payload,
      };

    case types.LOGIN_START:
      return { ...state, error: null, isLoading: true };
    case types.LOGIN_SUCCESS:
      return {
        isloged: true,
        isLoading: false,
        balance: payload.balance,
        user: payload.user,
        error: null,
      };
    case types.LOGIN_ERROR:
      return {
        isloged: false,
        isLoading: false,
        balance: 0,
        user: null,
        error: payload,
      };  

    default:
      return state;
  }
};

export default sessionReducer;