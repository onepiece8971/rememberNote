import {connect} from 'react-redux';
import SmallNoteViews from '../components/smallNoteViews';
import {review, getPointPost, getUserBooksId} from '../actions/noteDetailsActions';
import {getPostsInit} from '../actions/noteDetailsListActions';

export default connect(
  undefined,
  {
    review: review,
    getPointPost: getPointPost,
    getUserBooksId: getUserBooksId,
    getPostsInit: getPostsInit
  }
)(SmallNoteViews);