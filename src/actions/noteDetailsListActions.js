import {createAction} from 'redux-actions';
import {getPostsByUserBooksId} from '../api/posts'

const getPosts = createAction('POSTS', getPostsByUserBooksId);
const getPostsInit = createAction('POSTSINIT', getPostsByUserBooksId);

export {getPosts, getPostsInit}