import { REDUCER_TYPE } from '@constants';

// const status = true;
export const isOpenFirstTime = (state = true, action: any) => {
  switch (action.type) {
    case REDUCER_TYPE.IS_OPEN_FIRST_TIME:
      return action.data;
    default: {
      return state;
    }
  }
};
