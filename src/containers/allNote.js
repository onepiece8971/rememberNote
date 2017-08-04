import {connect} from 'react-redux';
import AllNote from '../components/allNote';

export default connect(
  state => ({
    userBooks : state.remember.userBooks.userBooks
  }),
)(AllNote);