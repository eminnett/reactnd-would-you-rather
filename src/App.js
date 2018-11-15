import React, { Component } from 'react';
import Nav from './components/Nav';
import HomePage from './pages/Home';
import NewQuestionPage from './pages/NewQuestion';
import QuestionPage from './pages/Question';
import LeaderboardPage from './pages/Leaderboard';
import LoginPage from './pages/Login';
import FourOhFourPage from './pages/FourOhFour';
import './App.scss';

class App extends Component {
  state = {
    page: '/foo',
    question: {answered: false}
  }
  routingSwitch = () => {
    switch(this.state.page) {
      case '/':
        return <HomePage />
      case '/add':
        return <NewQuestionPage />
      case '/questions/:id':
        return <QuestionPage question={this.state.question}/>
      case '/leaderboard':
        return <LeaderboardPage />
      case '/login':
        return <LoginPage />
      default:
        return <FourOhFourPage />
      }
  }
  render() {
    return (
      <div className="App">
        <Nav />
        { this.routingSwitch() }
      </div>
    );
  }
}

export default App;
