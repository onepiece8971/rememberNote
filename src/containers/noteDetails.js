import {connect} from 'react-redux';
import NoteDetails from '../components/noteDetails';

export default connect(
  state => ({
    post: state.post,
  }),
)(NoteDetails);