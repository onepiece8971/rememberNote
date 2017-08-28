import React, {Component} from 'react';
import {Platform, BackHandler} from 'react-native';
import {
  createNavigator,
  StackRouter,
  addNavigationHelpers,
  createNavigationContainer
} from 'react-navigation';
import Main from '../containers/main';
import NoteDetailsList from '../containers/noteDetailsList';
import NoteDetails from '../containers/noteDetails';
import AllNote from '../containers/allNote';

const routers = StackRouter({
  Home: {screen: Main},
  NoteDetailsList: {screen: NoteDetailsList},
  NoteDetails: {screen: NoteDetails},
  AllNote: {screen: AllNote},
}, {
  initialRouteName: 'Home',
});

const Screen = ({router, navigation}) => {
  const {routes, index} = navigation.state;
  const ActiveScreen    = router.getComponentForState(navigation.state);

  return (
    <ActiveScreen
      navigation={addNavigationHelpers({
        ...navigation,
        state: routes[index],
      })}
    />
  );
};

export const Navigator = createNavigationContainer(createNavigator(routers)(Screen));

// 整合Redux
export default class Navigation extends Component {
  backEvent = {};
  forward = 0;
  componentWillMount() {
    if (Platform.OS === 'android') {
      this.backEvent = BackHandler.addEventListener('hardwareBackPress', this.back);
    }
  }

  back = () => {
    const {goBack, nav} = this.props;
    goBack();
    if (nav.index === this.forward) {
      this.backEvent.remove();
      return false
    }
    return true
  };

  render() {
    const {dispatch, nav} = this.props;
    this.forward = nav.index;
    return (
      <Navigator navigation={addNavigationHelpers({
        dispatch: dispatch,
        state: nav,
      })} />
    )
  }
}