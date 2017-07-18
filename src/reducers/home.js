import { handleAction } from 'redux-actions';
import { combineReducers } from 'redux';
import {SIDEMENU} from '../actions/actionTypes';
const isOpen = handleAction(
  SIDEMENU,
  isOpen => isOpen + 1,
  0
);

export default rootReducer = combineReducers({
  isOpen,
});