import {handleActions} from 'redux-actions';

const home = handleActions({
  ['HOME']: (home, {payload}) => payload,
}, '');

export default home;