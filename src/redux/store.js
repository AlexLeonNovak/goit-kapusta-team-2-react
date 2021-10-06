// import {configureStore} from '@reduxjs/toolkit';

// const store = configureStore({
//   reducer: {
    
//   },
//   devTools: process.env.NODE_ENV === 'development',
// });

// export default store;
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './authUser/authUser.reducer';
import authReducer from './Auth/auth-reducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: userReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
const persistor = persistStore(store)
export default { store, persistor };