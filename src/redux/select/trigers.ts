import type { RootState } from '../store';

const getDialogTrigger = (state: RootState) => {
  return state.triggers.dialog;
};
const getLoaderTrigger = (state: RootState) => {
  return state.triggers.loader;
};

export { getDialogTrigger, getLoaderTrigger };
