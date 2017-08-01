import {createAction} from 'redux-actions';
import {getBooks} from '../api/books'

const books = createAction('BOOKS', getBooks);

export {books}

