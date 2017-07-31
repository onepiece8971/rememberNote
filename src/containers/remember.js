import {connect} from 'react-redux';
import Remember from '../components/remember';

export default connect(
  state => ({
    userBooks : state.remember.userBooks
  }),
)(Remember);