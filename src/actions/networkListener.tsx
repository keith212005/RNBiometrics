import { addEventListener } from '@react-native-community/netinfo';
import { REDUCER_TYPE } from '@constants';

// Network connetion listenr
export function networkListener() {
  return (
    dispatch: (arg0: { type: string; isOnline: boolean | null }) => void,
  ) => {
    return new Promise((resolve) => {
      addEventListener((state) => {
        resolve(state.isConnected);
        return dispatch({
          type: REDUCER_TYPE.NETWORK_STATUS,
          isOnline: state.isConnected,
        });
      });
    });
  };
}
