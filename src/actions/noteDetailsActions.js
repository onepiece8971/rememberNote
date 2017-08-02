import {createAction} from 'redux-actions';
import {getPostById} from '../api/posts'

const getPost = createAction('POST', getPostById);

export {getPost}