import { setupListeners } from '@reduxjs/toolkit/dist/query/react';
import { configureStore } from '@reduxjs/toolkit';
import { postsApi } from './api/posts';
import { tokenApi } from './api/token';
import tokenReducer from './slice/tokenSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [tokenApi.reducerPath]: tokenApi.reducer,
    token: tokenReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(postsApi.middleware, tokenApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
