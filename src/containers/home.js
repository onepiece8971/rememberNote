import Home from '../components/home';
import {sideMenu} from '../actions/homeActions';
import { connect } from 'react-redux';

export default connect(
  state => ({
    isOpen: state.isOpen, // 自动匹配reducers对应方法返回的值
  }),
  {onClick: sideMenu}
)(Home);