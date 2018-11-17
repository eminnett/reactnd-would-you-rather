import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { handleAnswerQuestion } from '../actions/shared';
import { Link } from 'react-router-dom';
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

  handleSubmission = (event) => {
    event.preventDefault();

    this.props.dispatch(
      handleAnswerQuestion(this.props.questionId, this.state.selection)
    );
  };


  render() {
    const askedByYou = this.props.currentUser && this.props.author.name === this.props.currentUser.name;
    const askedPhrase = (askedByYou) ? 'You ask' : `${this.props.author.name} asks`;

    return (
      <div className="component-wrapper unanswered-question">
        <h2>
          {askedPhrase}:
        </h2>
        <div className="component-body">
          <Avatar size="large" user={this.props.author} />
          { this.props.preview &&
            <div className="component-copy">
              <div className="prompt">
                Would you rather...
              </div>
              <div className="teaser">
                {this.props.question.optionOne.text}
              </div>
              <div className="teaser">
                Or...
              </div>
              <Link
                className="button"
                to={`/questions/${this.props.question.id}`}
              >View Question</Link>
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
                  value="optionOne"
                  name="question"
                  onChange={this.handleChange.bind(this)}
                />
                <label>{this.props.question.optionOne.text}?</label>
              </div>
              <div className="teaser left">
                - Or -
              </div>
              <div className="question-option">
                <input
                  id="answer-two"
                  type="radio"
                  value="optionTwo"
                  name="question"
                  onChange={this.handleChange.bind(this)}
                />
                <label>{this.props.question.optionTwo.text}?</label>
              </div>
              <button
                type="button"
                disabled={!this.state.selection}
                onClick={this.handleSubmission.bind(this)}
              >Submit</button>
            </div>
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps ({ currentUser: currentUserId, users, questions }, ownProps) {
  const question = questions[ownProps.questionId];
  const author = users[question.author];
  return { currentUser: users[currentUserId], author, question };
}

export default connect(mapStateToProps)(UnansweredQuestion);
