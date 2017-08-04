import {createAction} from 'redux-actions';
import {getPostById, getReviews} from '../api/posts';
import {addReciteApi, upLevelApi} from '../api/recite';

const post = createAction('POST', getPostById);

const pushToPost = createAction('PUSHTOPOST');

const getUserBooksId = createAction('USERBOOKSID');

const review = createAction('REVIEW', getReviews);

const addRecite = createAction('ADDRECITE', addReciteApi);

const upLevel = createAction('UPLEVEL', upLevelApi);

const addPoint = createAction('POINT');

const getPost = (ubId, postId) => {
  return (dispatch, getState) => {
    const state = getState();
    if (state.post.current.Id !== postId) {
      dispatch(post(ubId, postId));
    }
  }
};

const getPointPost = () => {
  return (dispatch, getState) => {
    const state = getState();
    const point = state.post.point;
    const reviews = state.post.reviews;
    if (reviews.length === undefined || reviews.length < point + 1) {
      return true;
    } else {
      dispatch(pushToPost(reviews[point]));
      return false;
    }
  }
};

export {getPost, review, getPointPost, addRecite, getUserBooksId, upLevel, addPoint}