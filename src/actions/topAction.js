import {createAction, createActions} from 'redux-actions';
import {getPostByNameApi} from '../api/posts';

export const {input} = createActions({
  INPUT: text => text,
});

const getPostByName = (ubId) => {
  return async (dispatch, getState) => {
    const state = getState();
    const name = state.top.text;
    if (name) {
      const json = await dispatch(createAction('POST', getPostByNameApi)(ubId, name));
      if (json.payload !== "") {
        return true
      }
    }
    return false
  }
};

export {getPostByName}