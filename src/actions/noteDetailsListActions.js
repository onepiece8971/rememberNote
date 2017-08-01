import {createAction} from 'redux-actions';
import {getPostsByUserBooksId} from '../api/posts'

const getPosts = createAction('POSTS', getPostsByUserBooksId);

export {getPosts}