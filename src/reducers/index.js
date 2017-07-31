import {combineReducers} from 'redux';
import sideMenu from './sideMenu';
import main from './main';
import home from './home';
import remember from './remember';

//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
  sideMenu,
  main,
  home,
  remember
});

export default rootReducer;
