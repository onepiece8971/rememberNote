import Top, {TopWithBack} from '../components/top';
import {connect} from 'react-redux';
import {toggle} from '../actions/sideMenuActions';
import {input, getPostByName} from '../actions/topAction';

export default connect(
  undefined,
  {toggle: toggle, inputText: input, getPostByName: getPostByName}
)(Top);