import {createAction} from 'redux-actions';
import {getBooks} from '../api/home'

const books = createAction('BOOKS', getBooks);

export {books}

