import {Provider} from 'react-redux';
import React from 'react';
import RouterRoot from './routerRoot';
import configureStore from '../store/configureStore';

const store = configureStore();

export default App = () => (
  <Provider store={store}>
    <RouterRoot />
  </Provider>
)