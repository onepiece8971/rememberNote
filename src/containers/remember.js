import Remember from '../components/remember';
import { connect } from 'react-redux';

export default connect(
  state => {
    return {
      isOpen: state.isOpen, // 自动匹配reducers对应方法返回的值
    };
  }
)(Remember);