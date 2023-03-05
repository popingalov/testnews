import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

interface IinitialState {
  removeSimulation: number[];
}
const initialState: IinitialState = {
  removeSimulation: [],
};

export const removeSimulationSlice = createSlice({
  name: 'removeSimulation',
  initialState,
  reducers: {
    setRemoveId: (state, { payload }: PayloadAction<number>) => {
      state.removeSimulation.push(payload);
    },
  },
});

const persistConfig = {
  key: 'data',
  storage,
};

const removeSimulationReuce = removeSimulationSlice.reducer;

export const { setRemoveId } = removeSimulationSlice.actions;

export default persistReducer(persistConfig, removeSimulationReuce);
