import {connect} from 'react-redux';
import NoteDetails from '../components/noteDetails';
import {addRecite, upLevel, addPoint, getPointPost, getPost} from '../actions/noteDetailsActions';

export default connect(
  state => ({
    post: state.post.current,
    ubId: state.post.ubId,
  }),
  {
    addRecite:    addRecite,
    upLevel:      upLevel,
    addPoint:     addPoint,
    getPointPost: getPointPost,
    getPost:      getPost
  }
)(NoteDetails);