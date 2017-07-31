import {handleActions} from 'redux-actions';

const home = handleActions({
  ['BOOKS']: (home, {payload}) => ({...home, books: payload}),
}, {books: []});

export default home;