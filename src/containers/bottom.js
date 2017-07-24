import {connect} from 'react-redux';
import Bottom from '../components/bottom';
import {route} from '../actions/mainActions';

export default connect(
  undefined,
  {mainRouterTo: route}
)(Bottom);