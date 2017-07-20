import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

const animation = handleActions({
  'ANIMATION/SIDEMENU/TOGGLEISOPEN': (animation) => ({...animation, sideMenu: {isOpen: !animation.sideMenu.isOpen}}),
  'ANIMATION/SIDEMENU/UPDATEISOPEN': (animation, {payload}) => ({...animation, sideMenu: {isOpen: payload}}),
  'ANIMATION/SIDEMENU/MENUOFFISOPEN': (animation) => ({...animation, sideMenu: {isOpen: false}}),
}, {sideMenu: {isOpen: false}});

export default rootReducer = combineReducers({
  animation,
});