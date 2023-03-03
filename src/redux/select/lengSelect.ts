import type { RootState } from '../store';

const getLeng = (state: RootState) => {
  return state.leng.leng;
};

export { getLeng };
