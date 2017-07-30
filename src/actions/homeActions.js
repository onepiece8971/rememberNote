import {createAction} from 'redux-actions';
import {get} from '../api/home'

const home = createAction('HOME', get);

export {home}

