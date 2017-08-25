import React from 'react';
import {Platform, BackHandler} from 'react-native';
import {Router, Route, Switch} from 'react-router-native';
import createHistory from 'history/createMemoryHistory';
import Main from '../containers/main';
import AllNote from '../containers/allNote';
import NoteDetailsList from '../containers/noteDetailsList';
import NoteDetails from '../containers/noteDetails';

let history = createHistory();

export default RouterRoot = ({getBooks, userBooks, getPostsInit}) => {
  let backEvent = {};
  let forward = 0;
  const back = () => {
    forward = history.index;
    history.go(-1);
    if (forward === history.index) {
      backEvent.remove();
      return false
    }
    return true
  };
  const init = () => {
    getBooks();
    userBooks(1, false);
    if (Platform.OS === 'android') {
      backEvent = BackHandler.addEventListener('hardwareBackPress', back);
    }
  };
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Main} onEnter={init()} />
        <Route path="/allNote" component={AllNote} onEnter={userBooks(1, true)} />
        <Route path="/noteDetailsList/:userBooksId" children={({match, ...rest}) => {
          getPostsInit(match.params.userBooksId, 1);
          return <NoteDetailsList userBooksId={match.params.userBooksId} {...rest} />
        }}/>
        <Route exact path="/noteDetails" component={NoteDetails} />
        <Route path="/noteDetails/review" children={() => {
          return <NoteDetails review={true} />
        }} />
      </Switch>
    </Router>
  )
}

export {history};