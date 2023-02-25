import type { RootState } from '../store';

const getToken = (state: RootState) => {
  return state.token.token;
};

export { getToken };
