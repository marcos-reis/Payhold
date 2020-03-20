import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'

import Routes from './routes';
import {store, persistor} from './store';

function App() {
  return (
    <Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
      <Routes />
	  </PersistGate>
    </Provider>
  );
}

export default App;
