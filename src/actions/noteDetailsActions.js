import {createAction} from 'redux-actions';
import {getPostById, getReviews} from '../api/posts';
import {addReciteApi, upLevelApi} from '../api/recite';

const post = createAction('POST', getPostById);

const pushToPost = createAction('POST');

const getUserBooksId = createAction('USERBOOKSID');

const review = createAction('REVIEW', getReviews);

const addRecite = createAction('ADDRECITE', addReciteApi);

const upLevel = createAction('UPLEVEL', upLevelApi);

const addPoint = createAction('POINT');

const getPost = (ubId, pageId) => {
  return async (dispatch, getState) => {
    const state = getState();
    const usedPages = state.remember.userBooks.userBooks[ubId].UsedPages;
    const postData = state.posts[ubId][pageId];
    if (pageId < 1 || pageId > usedPages) {
      return false
    }
    const current = state.post.current;
    if (current.UserBooksId !== ubId || current.Page !== pageId) {
      if (postData) {
        dispatch(pushToPost(postData));
      } else {
        dispatch(post(ubId, pageId));
      }
    }
    return true
  }
};

const getPointPost = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const point = state.post.point;
    const reviews = state.post.reviews;
    if (reviews.length < point + 1) {
      const json = await dispatch(review(state.post.ubId));
      const newReviews = json.payload;
      if (newReviews.length === 0) {
        return true;
      }
      dispatch(pushToPost(newReviews[0]));
      return false;
    } else {
      dispatch(pushToPost(reviews[point]));
      return false;
    }
  }
};

export {getPost, review, getPointPost, addRecite, getUserBooksId, upLevel, addPoint}