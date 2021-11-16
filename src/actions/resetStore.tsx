import { REDUCER_TYPE } from '@constants';

export const resetStore = () => ({
  type: REDUCER_TYPE.RESET_STORE,
  data: null,
});
