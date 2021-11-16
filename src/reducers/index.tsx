import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

// LOCAL IMPORTS
import { REDUCER_TYPE } from '@constants';
import { saveNetwork } from './networkReducer';
import { isOpenFirstTime } from './isOpenFirstTime';
import { setAppLanguage } from './setAppLanguage';
import { setDarkTheme } from './setDarkTheme';

const appReducer = combineReducers({
  isOnline: saveNetwork,
  isOpenedFirstTime: isOpenFirstTime,
  language: setAppLanguage,
  isDarkTheme: setDarkTheme,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === REDUCER_TYPE.RESET_STORE) {
    state = undefined;
  }
  return appReducer(state, action as any);
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['isOpenedFirstTime'], // navigation will not be persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };
