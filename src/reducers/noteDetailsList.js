import {handleActions} from 'redux-actions';

const posts = handleActions({
  ['POSTS']: (posts, {payload}) => ({...posts, [payload.id]: payload.json}),
}, {});

export default posts;