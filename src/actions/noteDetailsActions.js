import {createAction} from 'redux-actions';
import {getPostById, getReviews} from '../api/posts';
import {addReciteApi} from '../api/recite';

const post = createAction('POST', getPostById);

const getPost = (postId) => {
  return (dispatch, getState) => {
    const state = getState();
    if (state.post.current.Id !== postId) {
      dispatch(post(postId));
    }
  }
};

const pushToPost = createAction('PUSHTOPOST');

const getPointPost = () => {
  return (dispatch, getState) => {
    const state = getState();
    const point = state.post.point;
    const postData = state.post.reviews[point];
    dispatch(pushToPost(postData));
  }
};

const getUserBooksId = createAction('USERBOOKSID');

const review = createAction('REVIEW', getReviews);

const addRecite = createAction('ADDRECITE', addReciteApi);

export {getPost, review, getPointPost, addRecite, getUserBooksId}