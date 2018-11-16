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
      } else if (false) { // TODO: Replace with a check for 0 'answered' questions.
        listBody = <div className="help-message">
          You haven't answered any questions yet.
        </div>
      } else {
        listBody = <div>
          <AnsweredQuestion preview={true} />
          <AnsweredQuestion preview={true} />
          <AnsweredQuestion preview={true} />
        </div>
      }
    } else {
      if (false) { // TODO: Replace with a check for 0 'unanswered' questions.
        listBody = <div className="help-message">
          You have answered all available questions.
        </div>
      } else {
        listBody = <div>
          <UnansweredQuestion preview={true} />
          <UnansweredQuestion preview={true} />
          <UnansweredQuestion preview={true} />
        </div>
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

function mapStateToProps ({ currentUser }) {
  return {
    isAuthenticated: currentUser
  };
}

export default withRouter(connect(mapStateToProps)(HomePage));
