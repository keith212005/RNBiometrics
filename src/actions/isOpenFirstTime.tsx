import { REDUCER_TYPE } from '@constants';

export const isOpenFirstTime = (params: boolean) => ({
  type: REDUCER_TYPE.IS_OPEN_FIRST_TIME,
  data: params,
});
