import Top, {TopWithBack} from '../components/top';
import {connect} from 'react-redux';
import {toggle} from '../actions/sideMenuActions'

export default connect(
  undefined,
  {toggle: toggle}
)(Top);