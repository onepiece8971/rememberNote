import {connect} from 'react-redux';
import RouterRoot from '../components/routerRoot';
import {books} from '../actions/homeActions'
import {userBooks} from '../actions/rememberActions';
import {getPosts} from  '../actions/noteDetailsListActions'

export default connect(
  undefined,
  {userBooks: userBooks, getBooks: books, getPosts: getPosts}
)(RouterRoot);