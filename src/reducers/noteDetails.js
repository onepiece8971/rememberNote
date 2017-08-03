import {handleActions} from 'redux-actions';

const post = handleActions({
  ['POST']: (post, {payload}) => ({...post, current: payload}),
  ['REVIEW']: (post, {payload}) => ({...post, reviews: payload}),
  ['PUSHTOPOST']: (post, {payload}) => ({...post, current: payload}),
  ['ADDRECITE']: (post, {payload}) => ({...post, addRecite: payload}),
  ['USERBOOKSID']: (post, {payload}) => ({...post, ubId: payload}),
}, {current: {}, reviews: {}, point: 0, addRecite: 0, ubId: null});

export default post;