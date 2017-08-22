import {connect} from 'react-redux';
import NoteDetailsList from '../components/noteDetailsList';
import {getPost} from  '../actions/noteDetailsActions';
import {getPosts} from  '../actions/noteDetailsListActions';

export default connect(
  (state, {userBooksId}) => ({
    posts:         state.posts[userBooksId],
    userBooksName: state.remember.userBooks.userBooksNames[userBooksId]
  }),
  {getPost: getPost, getPosts: getPosts}
)(NoteDetailsList);