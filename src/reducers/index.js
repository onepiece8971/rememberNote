import {combineReducers} from 'redux';
import sideMenu from './sideMenu';
import nav from './nav';
import main from './main';
import home from './home';
import remember from './remember';
import posts from './noteDetailsList';
import post from './noteDetails';

//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
  sideMenu,
  nav,
  main,
  home,
  remember,
  posts,
  post,
});

export default rootReducer;
