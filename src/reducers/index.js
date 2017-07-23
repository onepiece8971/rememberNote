import {combineReducers} from 'redux';
import sideMenu from './sideMenu';

//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
  sideMenu,
});

export default rootReducer;
