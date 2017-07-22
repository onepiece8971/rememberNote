import React, {Component} from 'react';
import SideMenu from 'react-native-side-menu';
import {Router, Route} from 'react-router-native';
import createHistory from 'history/createMemoryHistory';
import PropTypes from 'prop-types'
import {MainView} from '../css/styles';
import CS from '../css/convertSize';

import Menu from './menu';
import Top from './top';
import Bottom from './bottom';
import Home from './home';
import Remember from './remember';

const mainHistory = createHistory();

export default class Main extends Component {
  static contextTypes = {
    router: PropTypes.shape({
      history: PropTypes.shape({
        push: PropTypes.func.isRequired,
        replace: PropTypes.func.isRequired
      }).isRequired
    }).isRequired
  };
  render() {
    const {toggle, isOpen, update, off} = this.props;
    const rootHistory = this.context.router.history;
    const rootLink = (to) => {
      rootHistory.push(to);
    };
    const mainLink = (to) => {
      mainHistory.push(to);
      off();
    };
    return (
      <SideMenu
        menu={<Menu rootLink={rootLink} mainLink={mainLink}/>}
        isOpen={isOpen}
        menuPosition="right"
        openMenuOffset={CS.w(332)}
        onChange={isOpen => update(isOpen)}
      >
        <Router history={mainHistory}>
          <MainView>
            <Top toggle={toggle}/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/remember" component={Remember}/>
            <Bottom/>
          </MainView>
        </Router>
      </SideMenu>
    )
  }
}
