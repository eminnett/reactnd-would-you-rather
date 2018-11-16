import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import UnansweredQuestion from '../components/UnansweredQuestion';
import AnsweredQuestion from '../components/AnsweredQuestion';

const navigatorClasses = (list, destination) => {
  let additionalClasses = '';
  if (list === destination) {
    additionalClasses += 'is-active';
  }
  return `navigator ${additionalClasses}`;
}

class HomePage extends Component {
  state = {
    list: 'unanswered'
  }

  switchList(listName) {
    return () => {
      if (this.state.list !== listName) {
        this.setState({list: listName});
      }
    }
  }

  render() {
    let listBody = '';

    if (this.state.list === 'answered') {
      if ( !this.props.isAuthenticated) {
        listBody = <div className="help-message">
          To view answered questions, please log in by visiting the <Link className="inline-link" to='/login'>login</Link> page.
        </div>
      } else if (this.props.answeredQuestions.length === 0) {
        listBody = <div className="help-message">
          You haven't answered any questions yet.
        </div>
      } else {
        listBody = this.props.answeredQuestions.map((id) => (
          <AnsweredQuestion key={id} preview={true} questionId={id} />
        ));
      }
    } else {
      if (this.props.unansweredQuestions.length === 0) {
        listBody = <div className="help-message">
          You have answered all available questions.
        </div>
      } else {
        listBody = this.props.unansweredQuestions.map((id) => (
          <UnansweredQuestion key={id} preview={true} questionId={id} />
        ));
      }
    }

    return (
      <div className="section-wrapper">
        <section>
          <nav className="tabs">
            <div
              className={navigatorClasses(this.state.list, 'unanswered')}
              onClick={this.switchList('unanswered')}
            >Unanswered Questions</div>
            <div
              className={navigatorClasses(this.state.list, 'answered')}
              onClick={this.switchList('answered')}
            >Answered Questions</div>
          </nav>
          <div className="question-list">
            { listBody }
          </div>
        </section>
      </div>
    );
  }
}

function mapStateToProps ({ currentUser: currentUserId, users, questions }) {
  let props = {
    currentUser: currentUserId ? users[currentUserId] : null,
    isAuthenticated: currentUserId !== null,
    unansweredQuestions: [],
    answeredQuestions: []
   };
  const sortedIds = Object.keys(questions)
    .sort((a,b) => questions[b].timestamp - questions[a].timestamp);

  for (let id of sortedIds) {
    if (props.isAuthenticated) {
      if (props.currentUser.answers.hasOwnProperty(id)) {
        props.answeredQuestions.push(id);
      } else {
        props.unansweredQuestions.push(id);
      }
    } else {
      props.unansweredQuestions.push(id);
    }
  }
  return props;
}

export default withRouter(connect(mapStateToProps)(HomePage));
