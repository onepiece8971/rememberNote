import { createActions } from 'redux-actions';

const mainActions = createActions({
  ANIMATION: {
    SIDEMENU: {
      TOGGLEISOPEN: undefined,
      UPDATEISOPEN: undefined
    },
  }
});

export const {toggleisopen, updateisopen} = mainActions.animation.sidemenu;