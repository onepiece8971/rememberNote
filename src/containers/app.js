import {Provider} from 'react-redux';
import React from 'react';
// import RouterRoot from './routerRoot';
import Navigation from './navigation';
import configureStore from '../store/configureStore';

const store = configureStore();

export default App = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
)