import Main from '../components/main';
import {connect} from 'react-redux';

export default connect(
  state => ({
    route : state.main.bottom.route
  }),
  undefined
)(Main);