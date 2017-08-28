import {connect} from 'react-redux';
import NoteDetailsList from '../components/noteDetailsList';
import {getPost} from  '../actions/noteDetailsActions';
import {getPosts, getPostsInit} from  '../actions/noteDetailsListActions';

export default connect(
  (state) => {
    const userBooksId = state.post.ubId;
    return {
      posts:         state.posts[userBooksId],
      userBooksName: state.remember.userBooks.userBooksNames[userBooksId],
      userBooksId:   userBooksId
    }
  },
  {getPost: getPost, getPosts: getPosts, getPostsInit: getPostsInit}
)(NoteDetailsList);