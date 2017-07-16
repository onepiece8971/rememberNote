import Counter from '../components/counter';
import * as counterActions from '../actions/counterActions';
import { connect } from 'react-redux';

export default connect(
  state => {
    return {
      counter: state.counter, // 自动匹配reducers对应方法返回的值
    };
  },
  counterActions
)(Counter);
