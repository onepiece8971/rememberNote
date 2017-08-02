import {handleActions} from 'redux-actions';

const remember = handleActions({
  ['USERBOOKS']: (remember, {payload}) => {
    let userBooksNames = {};
    payload.map(function(v){
      userBooksNames[v.Id] = v.Name;
    });
    return {...remember, userBooks: {userBooksNames: userBooksNames, userBooks: payload}}
  },
}, {userBooks: {userBooksNames: {}, userBooks: []}});

export default remember;