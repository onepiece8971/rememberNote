import React from 'react';
import {Router, Route, Switch} from 'react-router-native';
import createHistory from 'history/createMemoryHistory';
import Main from '../containers/main';
import AllNote from './allNote';
import NoteDetailsList from './noteDetailsList';
import NoteDetails from './noteDetails';

const history = createHistory();

export default RouterRoot = ({getBooks, userBooks}) => {
  const init = () => {
    getBooks();
    userBooks();
  };
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Main} onEnter={init()}/>
        <Route path="/allNote" component={AllNote}/>
        <Route path="/noteDetailsList" component={NoteDetailsList}/>
        <Route path="/noteDetails" component={NoteDetails}/>
        <Route path="/memoryNoteDetails">
          <NoteDetails memory={true}/>
        </Route>
      </Switch>
    </Router>
  )
}

export {history};