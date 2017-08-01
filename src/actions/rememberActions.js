import {createAction} from 'redux-actions';
import {getUserBooksByUid} from '../api/userBooks'

const userBooks = createAction('USERBOOKS', getUserBooksByUid);

export {userBooks}