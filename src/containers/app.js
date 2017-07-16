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

import React from 'react';
import Home from '../components/home';

export default App = () => (
  <Home />
);