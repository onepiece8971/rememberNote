import {createAction} from 'redux-actions';
import {getUserBooksByUid} from '../api/home'

const userBooks = createAction('USERBOOKS', getUserBooksByUid);

export {userBooks}