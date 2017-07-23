/*import React, {Component} from 'react';
import { Provider } from 'react-redux';

import CounterApp from './counterApp';
import configureStore from '../store/configureStore';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CounterApp />
      </Provider>
    );
  }
}*/

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import React from 'react';
import RouterRoot from './routerRoot';
import reducer from '../reducers';

const store = createStore(reducer);

export default App = () => (
  <Provider store={store}>
    <RouterRoot />
  </Provider>
)