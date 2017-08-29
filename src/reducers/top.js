import {handleActions} from 'redux-actions';

export default top = handleActions({
  'INPUT': (top, {payload}) => ({...top, text: payload}),
}, {text: ''});