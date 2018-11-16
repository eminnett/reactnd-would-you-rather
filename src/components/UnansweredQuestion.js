import React, { Component }  from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Avatar from './Avatar';

class UnansweredQuestion extends Component {
  static propTypes = {
    preview: PropTypes.bool,
    questionId: PropTypes.string.isRequired
  };

  state = { selection: '' };

  handleChange = (event) => {
    this.setState({ selection: event.target.value });
  };

  render() {
    const question = this.props.questions[this.props.questionId];
    const user = this.props.users[question.author];
    const askedByYou = this.props.currentUser && user.name === this.props.currentUser.name;
    const askedPhrase = (askedByYou) ? 'You ask' : `${user.name} asks`;

    return (
      <div className="component-wrapper unanswered-question">
        <h2>
          {askedPhrase}:
        </h2>
        <div className="component-body">
          <Avatar size="large" user={user} />
          { this.props.preview &&
            <div className="component-copy">
              <div className="prompt">
                Would you rather...
              </div>
              <div className="teaser">
                {question.optionOne.text}
              </div>
              <div className="teaser">
                Or...
              </div>
              <button>View Question</button>
            </div>
          }
          { !this.props.preview &&
            <div className="component-copy">
              <div className="prompt">
                Would you rather...
              </div>
              <div className="question-option">
                <input
                  id="answer-one"
                  type="radio"
                  value="1"
                  name="question"
                  onChange={this.handleChange.bind(this)}
                />
                <label>{question.optionOne.text}</label>
              </div>
              <div className="question-option">
                <input
                  id="answer-two"
                  type="radio"
                  value="2"
                  name="question"
                  onChange={this.handleChange.bind(this)}
                />
                <label>{question.optionTwo.text}</label>
              </div>
              <button
                type="button"
                disabled={!this.state.selection}
              >Submit</button>
            </div>
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps ({ currentUser: currentUserId, users, questions }) {
  return { currentUser: users[currentUserId], users, questions };
}

export default connect(mapStateToProps)(UnansweredQuestion);
