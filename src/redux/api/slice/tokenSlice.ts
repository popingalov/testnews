import { createSlice } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const initialState = {
  token: null,
};

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, { payload }) => {
      state.token = payload;
    },
    logout: () => initialState,
  },
});

const persistConfig = {
  key: 'token',
  storage,
};

const tokenReuce = tokenSlice.reducer;

export const { setToken } = tokenSlice.actions;

export default persistReducer(persistConfig, tokenReuce);
