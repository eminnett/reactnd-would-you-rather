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

// Phase 2:
// TODO: Tie in Redux and refactor components so they are connected.
// TODO: Create reducers and actions to handle questions.
// TODO: Add logic to correctly sort user rankings on the leaderboard page (ties are listed alphabetically by name).
// TODO: Add logic to handle next and previous buttons on the question page.
// TODO: Add logic to handle answering a question.
// TODO: Once questions can be created, double check home page questions are properly sorted (newest to oldest).
// TODO: Add logic to support 'The unanswered questions are shown by default.' This is should be the default whenever a user logs in.
// TODO: Revise the answered question styling so in all cases the number of answers and percentage can bew shown for both options.
// TODO: Clearly mark the option that a user chose for answered questions.
// TODO: Handle 404 if the question page url does not match a question ID.
// TODO: Refactor the answer question flow so the answered question is shown before navigating away from the page.

// Suggested Guide from the project page:
// Step 1 - Design the shape of the state and create reducers.
// Step 2 - Create a Redux store. Connect logger middleware (optional) and Redux Thunk middleware (alternatively, you can use Redux Saga, etc.).
// Step 3 - For each view that needs access to the store, create the component and connect it to the store.
// Step 4 - For the component you created in the last step, create actions and action creators. Check that everything works correctly.
// Step 5 - Repeat Step 3 & Step 4 for each component that needs access to the store.
// Step 6 - Create presentational components and confirm that everything works correctly.
// Step 7 - Add React Router.
// Step 8 - Add finishing touches and make sure the project meets the rubric.

// Phase 3:
// TODO: Make sure the project Rubric architecture requiremenst are met.
// TODO: Tidy up styling and colour pallate.
// TODO: Write project README.
// TODO: Collect and list references and sources for this project.
// https://github.com/udacity/reactnd-redux-todos-goals
// https://github.com/udacity/reactnd-chirper-app
// https://css-tricks.com/snippets/css/a-guide-to-flexbox/
// https://css-tricks.com/creating-yin-yang-loaders-web/
// https://stackoverflow.com
// https://developer.mozilla.org
// https://reacttraining.com/react-router
// https://reactjs.org/docs/
// https://tylermcginnis.com
// Avatars URL: https://www.behance.net/gallery/47035405/Free-avatars-flat-icons

class App extends Component {
  componentDidMount() {
    this.props.dispatch(populateData())
  }

  render() {
    return (
      <div className="App">
        <LoadingBar />
        <Route  component={Nav} />
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
