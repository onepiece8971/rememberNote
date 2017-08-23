import {handleActions} from 'redux-actions';

const remember = handleActions({
  ['USERBOOKS']: (remember, {payload}) => {
    let userBooksNames = {};
    let userBooks = {};
    payload.map(function(v){
      userBooksNames[v.Id] = v.Name;
      userBooks[v.Id] = v
    });
    return {...remember, userBooks: {userBooksNames: userBooksNames, userBooks: userBooks}}
  },
}, {userBooks: {userBooksNames: {}, userBooks: []}});

export default remember;