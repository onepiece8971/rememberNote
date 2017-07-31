import Home from '../components/home';
import {connect} from 'react-redux';

export default connect(
  state => ({
    books : state.home.books
  })
)(Home);