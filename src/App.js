import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { populateData } from './actions/shared';
import LoadingBar from 'react-redux-loading'
import Nav from './components/Nav';
import PrivateRoute from './components/PrivateRoute';
import HomePage from './pages/Home';
import NewQuestionPage from './pages/NewQuestion';
import QuestionPage from './pages/Question';
import LeaderboardPage from './pages/Leaderboard';
import LoginPage from './pages/Login';
import FourOhFourPage from './pages/FourOhFour';
import './App.scss';

class App extends Component {
  componentDidMount() {
    if (this.props.loading) {
      this.props.dispatch(populateData());
    }
  }

  render() {
    return (
      <div className="App">
        <Route  component={Nav} />
        <LoadingBar className="loading-bar"/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/login' component={LoginPage} />
          <PrivateRoute exact path='/add' component={NewQuestionPage}/>
          <PrivateRoute exact path='/leaderboard' component={LeaderboardPage}/>
          <PrivateRoute path='/questions/:id' component={QuestionPage}/>
          <Route component={FourOhFourPage} />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    loading: Object.keys(state.users).length === 0
  };
}

export default withRouter(connect(mapStateToProps)(App));
