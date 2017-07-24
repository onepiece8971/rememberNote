import React from 'react';
import {Router, Route, Switch} from 'react-router-native';
import createHistory from 'history/createMemoryHistory';
import Main from './main';
import AllNote from '../components/allNote';
import NoteDetailsList from '../components/noteDetailsList';
import NoteDetails from '../components/noteDetails';

const history = createHistory();

/*NoteDetails.defaultProps = {
  memory: true
};*/

export default RouterRoot = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Main}/>
      <Route path="/allNote" component={AllNote}/>
      <Route path="/noteDetailsList" component={NoteDetailsList}/>
      <Route path="/noteDetails" component={NoteDetails}/>
    </Switch>
  </Router>
)

export {history};