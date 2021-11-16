import * as React from 'react';

// THIRD PARTY IMPORTS
import { Provider } from 'react-redux';
import { AppContainer } from '@navigator';

import { PersistGate } from 'redux-persist/integration/react';

// LOCAL IMPORTS
import { store, persistor } from './reducers';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContainer />
      </PersistGate>
    </Provider>
  );
};

export default App;
