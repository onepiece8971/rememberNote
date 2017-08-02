import {connect} from 'react-redux';
import NoteDetailsList from '../components/noteDetailsList';

export default connect(
  (state, {userBooksId}) => ({
    posts:         state.posts[userBooksId],
    userBooksName: state.remember.userBooks.userBooksNames[userBooksId]
  }),
)(NoteDetailsList);