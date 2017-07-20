import {createActions} from 'redux-actions';

const mainActions = createActions({
  ANIMATION: {
    SIDEMENU: {
      TOGGLEISOPEN: undefined,
      UPDATEISOPEN: undefined,
      MENUOFFISOPEN: undefined
    },
  }
});

export const {toggleisopen, updateisopen, menuoffisopen} = mainActions.animation.sidemenu;