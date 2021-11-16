import { REDUCER_TYPE } from '@constants';

const isOnline = false;
export const saveNetwork = (state = isOnline, action: any) => {
  switch (action.type) {
    case REDUCER_TYPE.NETWORK_STATUS:
      return action.isOnline;
    default: {
      return state;
    }
  }
};
