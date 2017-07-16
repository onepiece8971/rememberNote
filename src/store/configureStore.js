import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from '../reducers';

const middlewares = [thunk];
const enhancer = composeWithDevTools(applyMiddleware(...middlewares));

export default (initialState) => {
  return createStore(reducer, initialState, enhancer);
};