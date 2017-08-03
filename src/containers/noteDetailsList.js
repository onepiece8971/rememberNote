import {connect} from 'react-redux';
import NoteDetailsList from '../components/noteDetailsList';
import {getPost} from  '../actions/noteDetailsActions';

export default connect(
  (state, {userBooksId}) => ({
    posts:         state.posts[userBooksId],
    userBooksName: state.remember.userBooks.userBooksNames[userBooksId]
  }),
  {getPost: getPost}
)(NoteDetailsList);