import {handleActions} from 'redux-actions';

const post = handleActions(
  {
    ['POST']:        (post, {payload}) => ({...post, current: payload}),
    ['REVIEW']:      (post, {payload}) => ({...post, reviews: payload, point: 0}),
    ['PUSHTOPOST']:  (post, {payload}) => ({...post, current: payload}),
    ['ADDRECITE']:   (post, {payload}) => ({...post, isSuccess: {...post.isSuccess, addRecite: payload}}),
    ['USERBOOKSID']: (post, {payload}) => ({...post, ubId: payload}),
    ['UPLEVEL']:     (post, {payload}) => ({...post, isSuccess: {...post.isSuccess, upLevel: payload}}),
    ['POINT']:       post              => ({...post, point: post.point + 1}),
  },
  {
    current: {},
    reviews: {},
    point: 0,
    ubId: null,
    isSuccess: {
      addRecite: 0,
      upLevel: 0
    }
  }
);

export default post;