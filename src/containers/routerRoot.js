import RouterRoot from '../components/routerRoot';
import {connect} from 'react-redux';
import {home} from '../actions/homeActions'

export default connect(
  undefined,
  {home: home}
)(RouterRoot);