import {createActions} from 'redux-actions';

const sideMenuActions = createActions({
  SIDEMENU: {
    TOGGLE: undefined,
    UPDATE: undefined,
    OFF: undefined
  }
});

export const {toggle, update, off} = sideMenuActions.sidemenu;