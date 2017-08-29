import {handleActions} from 'redux-actions';

const posts = handleActions({
  ['POSTS']: (posts, {payload}) => {
    if (payload.json) {
      if (posts[payload.id]) {
        payload.json = {...payload.json, ...posts[payload.id]};
      }
      return {...posts, [payload.id]: payload.json}
    }
    return posts
  },
  ['POSTSINIT']: (posts, {payload}) => ({...posts, [payload.id]: payload.json})
}, {});

export default posts;