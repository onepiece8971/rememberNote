import {createActions} from 'redux-actions';

const mainActions = createActions({
  MAIN: {
    BOTTOM: {
      ROUTE: undefined
    }
  }
});

export const {route} = mainActions.main.bottom;