import {handleActions} from 'redux-actions';

export default sideMenu = handleActions({
  'SIDEMENU/TOGGLE': (sideMenu) => ({...sideMenu, isOpen: !sideMenu.isOpen}),
  'SIDEMENU/UPDATE': (sideMenu, {payload}) => ({...sideMenu, isOpen: payload}),
  'SIDEMENU/OFF': (sideMenu) => ({...sideMenu, isOpen: false}),
}, {isOpen: false});