import {connect} from 'react-redux';
import NoteDetails from '../components/noteDetails';
import {addRecite , getPost} from '../actions/noteDetailsActions';

export default connect(
  state => ({
    post: state.post.current,
    ubId: state.post.ubId,
  }),
  {addRecite: addRecite, getPost: getPost}
)(NoteDetails);