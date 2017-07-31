import {connect} from 'react-redux';
import RouterRoot from '../components/routerRoot';
import {books} from '../actions/homeActions'
import {userBooks} from '../actions/rememberActions';

export default connect(
  undefined,
  {userBooks: userBooks, getBooks: books}
)(RouterRoot);