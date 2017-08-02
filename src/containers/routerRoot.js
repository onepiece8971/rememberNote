import {connect} from 'react-redux';
import RouterRoot from '../components/routerRoot';
import {books} from '../actions/homeActions'
import {userBooks} from '../actions/rememberActions';
import {getPosts} from  '../actions/noteDetailsListActions';
import {getPost} from  '../actions/noteDetailsActions';

export default connect(
  undefined,
  {userBooks: userBooks, getBooks: books, getPosts: getPosts, getPost: getPost}
)(RouterRoot);