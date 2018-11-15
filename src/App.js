import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import HomePage from './pages/Home';
import NewQuestionPage from './pages/NewQuestion';
import QuestionPage from './pages/Question';
import LeaderboardPage from './pages/Leaderboard';
import LoginPage from './pages/Login';
import FourOhFourPage from './pages/FourOhFour';
import './App.scss';

// Phase 1:
// TODO: Only show session bar (in nav) when there is a current user.
// TODO: Add logic to handle logging out.
// TODO: Add logic to redirect to the login page if a protected page is requested when this is no current user.
// TODO: Add PropTypes where necessary.

// Phase 2:
// TODO: Add Redux to store and manage the application state.
// TODO: Find and process a set of avatars to use for the project.
// TODO: Add the API so the application data can be loaded dynamically.
// TODO: Add logic to correctly sort questions on the home page (newest to oldest).
// TODO: Add logic to correctly sort user rankings on the leaderboard page (ties are listed alphabetically by name).
// TODO: Add logic to handle next and previous buttons on the question page.
// TODO: Add logic to handle answering a question.
// TODO: Add logic to support 'The unanswered questions are shown by default.' This is should be the default whenever a user logs in.
// TODO: Revise the answered question styling so in all cases the  umber of answers and percentage can bew shown for both options.
// TODO: Clearly mark the option that a user chose for answered questions.
// TODO: Handle 404 if the question page url does not match a question ID.
// TODO: Refactor the answer question flow so the answered question is shown before navigating away from the page.

// Phase 3:
// TODO: Make sure the project Rubric architecture requiremenst are met.
// TODO: Tidy up styling and colour pallate.
// TODO: Write project README.
// TODO: Collect and list references and sources for this project.

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route component={Nav} />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/add' component={NewQuestionPage}/>
          <Route exact path='/leaderboard' component={LeaderboardPage}/>
          <Route exact path='/login' component={LoginPage}/>
          <Route path='/questions/:id' component={QuestionPage}/>
          <Route component={FourOhFourPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
