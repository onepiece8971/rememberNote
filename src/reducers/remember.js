import {handleActions} from 'redux-actions';

const remember = handleActions({
  ['USERBOOKS']: (remember, {payload}) => ({...remember, userBooks: payload}),
}, {userBooks: []});

export default remember;