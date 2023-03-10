import { setupListeners } from '@reduxjs/toolkit/dist/query/react';
import { configureStore } from '@reduxjs/toolkit';
import { postsApi } from './api/posts';
import { tokenApi } from './api/token';
import tokenReducer from './slice/tokenSlice';
import removeSimulation from './slice/removeSimulation';
import lengReducer from './slice/leng';
import { triggerReduce } from './slice/trigers';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { pexelsApi } from './api/pixel';

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [tokenApi.reducerPath]: tokenApi.reducer,
    [pexelsApi.reducerPath]: pexelsApi.reducer,
    token: tokenReducer,
    leng: lengReducer,
    triggers: triggerReduce,
    removeSimulation: removeSimulation,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(postsApi.middleware, tokenApi.middleware, pexelsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
