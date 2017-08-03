import React from 'react';
import {Router, Route, Switch} from 'react-router-native';
import createHistory from 'history/createMemoryHistory';
import Main from '../containers/main';
import AllNote from './allNote';
import NoteDetailsList from '../containers/noteDetailsList';
import NoteDetails from '../containers/noteDetails';

const history = createHistory();

export default RouterRoot = ({getBooks, userBooks, getPosts}) => {
  const init = () => {
    getBooks();
    userBooks();
  };
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Main} onEnter={init()}/>
        <Route path="/allNote" component={AllNote}/>
        <Route path="/noteDetailsList/:userBooksId" children={({match, ...rest}) => {
          getPosts(match.params.userBooksId);
          return <NoteDetailsList userBooksId={match.params.userBooksId} {...rest} />
        }}/>
        <Route path="/noteDetails" component={NoteDetails} />
      </Switch>
    </Router>
  )
}

export {history};