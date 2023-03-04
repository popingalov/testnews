import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

interface IinitialState {
  leng: string;
}
const initialState: IinitialState = {
  leng: 'EN',
};

export const lengSlice = createSlice({
  name: 'leng',
  initialState,
  reducers: {
    setLeng: (state, { payload }: PayloadAction<string>) => {
      state.leng = payload;
    },
    logout: () => initialState,
  },
});

const persistConfig = {
  key: 'data',
  storage,
};

const tokenReuce = lengSlice.reducer;

export const { setLeng } = lengSlice.actions;

export default persistReducer(persistConfig, tokenReuce);
