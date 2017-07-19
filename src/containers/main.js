import Main from '../components/main';
import {connect} from 'react-redux';
import {toggleisopen, updateisopen} from '../actions/mainActions';

export default connect(
  state => ({
    isOpen : state.animation.sideMenu.isOpen
  }),
  {toggle: toggleisopen, update: updateisopen}
)(Main);

