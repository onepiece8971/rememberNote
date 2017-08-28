import Main from '../components/main';
import {connect} from 'react-redux';
import {books} from '../actions/homeActions'
import {userBooks} from '../actions/rememberActions';

export default connect(
  state => ({
    route : state.main.bottom.route
  }),
  {userBooks: userBooks, getBooks: books}
)(Main);