import { handleActions } from 'redux-actions';
import * as types from '../actions/actionTypes';
const counter = handleActions({
  [types.INCREMENT]: (state) => state + 1,
  [types.DECREMENT]: (state) => state - 1,
}, 0);

export default counter;
