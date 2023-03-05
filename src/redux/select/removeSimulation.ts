import type { RootState } from '../store';

const getRemoveSimulation = (state: RootState) => {
  return state.removeSimulation.removeSimulation;
};

export { getRemoveSimulation };
