import {connect} from 'react-redux';
import SmallNoteViews from '../components/smallNoteViews';
import {review, getPointPost, getUserBooksId} from '../actions/noteDetailsActions';

export default connect(
  undefined,
  {review: review, getPointPost: getPointPost, getUserBooksId: getUserBooksId}
)(SmallNoteViews);