import {connect} from 'react-redux';
import {update, off} from '../actions/sideMenuActions';
import Menu from '../components/menu';

export default connect(
  state => ({
    isOpen : state.sideMenu.isOpen
  }),
  {update: update, off: off}
)(Menu);