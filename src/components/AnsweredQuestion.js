import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Avatar from './Avatar';

class AnsweredQuestion extends Component {
  render() {
    const question = this.props.questions[this.props.questionId];
    const user = this.props.users[question.author];
    const chosenOption = this.props.currentUser.answers[question.id];
    const chosenOptionText = question[chosenOption].text;
    const otherOption = ['optionOne', 'optionTwo'].filter(opt => opt !== chosenOption);
    const otherOptionText = question[otherOption].text;
    const askedName = user.name === this.props.currentUser.name ? 'you' : user.name;

    return (
      <div className="component-wrapper answered-question">
        <h2>
          Asked by {askedName}:
        </h2>
        <div className="component-body">
          <Avatar size="large" user={user} />
          { this.props.preview &&
            <div className="component-copy">
              <div className="prompt">
                You said you would rather...
              </div>
              <div className="teaser">
                {chosenOptionText}.
              </div>
              <button>View Question</button>
            </div>
          }
          { !this.props.preview &&
            <div className="component-copy answers">
              <div className="answer chosen-answer">
                <div className="copy">
                  You decided you would prefer to {chosenOptionText}.
                </div>
              </div>
              <div className="comparison-bar">
                <div className="chosen-bar" style={{width: '25%'}}>25% (1/4)</div>
                <div className="alternative-bar" style={{width: '75%'}}>75% (3 of 4 answers)</div>
              </div>
              <div className="answer alternative-answer">
                <div className="copy">
                  Rather than choosing to {otherOptionText}.
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}

AnsweredQuestion.propTypes = {
  preview: PropTypes.bool,
  questionId: PropTypes.string.isRequired
};

function mapStateToProps ({ currentUser: currentUserId, users, questions }) {
  return { currentUser: users[currentUserId], users, questions };
}

export default connect(mapStateToProps)(AnsweredQuestion);
