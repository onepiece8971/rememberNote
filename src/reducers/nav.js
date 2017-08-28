import {Navigator} from '../components/navigation';
export default nav = (state, action) => {
  const {type} = action;
  switch (type) {
    case 'GOBACK':
      let routes = state.routes;
      let index = 0;
      if (state.index - 1 >= 0) {
        index = state.index - 1;
        routes.pop();
      }
      return {...state, index: index, routes: routes};
      break;
    default:
      const newState = Navigator.router.getStateForAction(action, state);
      return newState || state;
  }
};