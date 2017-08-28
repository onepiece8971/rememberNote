import {connect} from 'react-redux';
import Navigation from '../components/navigation';
import {goBack} from '../actions/navigationAction';

const mapStateToProps = (state) => ({
  nav: state.nav
});

const mapDispatchToProps = (dispatch) => {
  return {
    goBack: () => dispatch(goBack()),
    dispatch: dispatch
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);