import { handleActions } from 'redux-actions';

export default main = handleActions({
  'MAIN/BOTTOM/ROUTE': (main, {payload}) => ({...main, bottom: {route: payload}}),
}, {bottom: {route: '/home'}});