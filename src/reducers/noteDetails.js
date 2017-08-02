import {handleActions} from 'redux-actions';

const post = handleActions({
  ['POST']: (post, {payload}) => payload,
}, {});

export default post;