import { createSlice, PayloadAction } from '@reduxjs/toolkit';
const initialState = {
  dialog: false,
  loader: false,
};

export const triggersSlice = createSlice({
  name: 'triggers',
  initialState,
  reducers: {
    changeDialogTrigger: (state, { payload }: PayloadAction<boolean>) => {
      state.dialog = payload;
    },
    changeLoaderTrigger: (state, { payload }: PayloadAction<boolean>) => {
      state.loader = payload;
    },
  },
});

export const triggerReduce = triggersSlice.reducer;

export const { changeDialogTrigger, changeLoaderTrigger } =
  triggersSlice.actions;
