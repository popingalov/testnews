import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

interface IinitialState {
  removeId: number[];
  removeItems: IPost[];
}
const initialState: IinitialState = {
  removeId: [],
  removeItems: []
};

export const removeSimulationSlice = createSlice({
  name: 'removeSimulation',
  initialState,
  reducers: {
    setRemoveId: (state, { payload }: PayloadAction<IPost>) => {
      state.removeItems.push(payload)
      state.removeId.push(payload.id)
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
