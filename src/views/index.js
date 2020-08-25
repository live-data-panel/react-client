import * as React from 'react';
import AppRouter from './AppRouter';

import { Provider } from 'react-redux';
import { configureStore } from './duck/store';

function App() {
  return (
    <>
      <Provider store={configureStore()}>
        <AppRouter />
      </Provider>
    </>
  );
}

export default App;
