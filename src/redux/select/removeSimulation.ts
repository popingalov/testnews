import type { RootState } from '../store';

const getRemoveSimulationId = (state: RootState) => {
  return state.removeSimulation.removeId;
};
const getRemoveSimulationItems = (state: RootState) => {
  return state.removeSimulation.removeItems;
};

export { getRemoveSimulationId, getRemoveSimulationItems };
