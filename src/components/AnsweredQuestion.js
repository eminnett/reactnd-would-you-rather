import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Avatar from './Avatar';

class AnsweredQuestion extends Component {
  render() {
    const chosenOption = this.props.currentUser.answers[this.props.question.id];
    const chosenOptionText = this.props.question[chosenOption].text;
    const otherOption = ['optionOne', 'optionTwo'].filter(opt => opt !== chosenOption);
    const otherOptionText = this.props.question[otherOption].text;
    const youAsked = this.props.author.id === this.props.currentUser.id;
    const askedName = youAsked ? 'you' : this.props.author.name;
    const chosenCount = this.props.question[chosenOption].votes.length;
    const otherCount = this.props.question[otherOption].votes.length;
    const totalCount = chosenCount + otherCount;
    const chosenPercent = (chosenCount / totalCount) * 100;
    const otherPercent = (otherCount / totalCount) * 100;

    return (
      <div className="component-wrapper answered-question">
        <h2>
          Asked by {askedName}:
        </h2>
        <div className="component-body">
          <Avatar size="large" user={this.props.author} />
          { this.props.preview &&
            <div className="component-copy">
              <div className="prompt">
                You said you would rather...
              </div>
              <div className="teaser">
                {chosenOptionText}.
              </div>
              <Link
                className="button"
                to={`/questions/${this.props.question.id}`}
              >View Question</Link>
            </div>
          }
          { !this.props.preview &&
            <div className="component-copy answers">
              <div className={`answer chosen-answer ${chosenPercent < 25 ? 'space-below' : ''}`}>
                <div className="copy">
                  You decided you would prefer to {chosenOptionText}.
                </div>
              </div>
              <div className="comparison-bar">
                <div className="chosen-bar" style={{width: `${chosenPercent}%`}}>
                  <div className={`bar-label ${chosenPercent < 25 ? 'short' : ''}`}>
                    {`${chosenPercent}% (${chosenCount} / ${totalCount})`}
                  </div>
                </div>
                <div className="alternative-bar" style={{width: `${otherPercent}%`}}>
                  <div className={`bar-label ${otherPercent < 25 ? 'short' : ''}`}>
                    {`${otherPercent}% (${otherCount} / ${totalCount})`}
                  </div>
                </div>
              </div>
              <div className={`answer alternative-answer ${otherPercent < 25 ? 'space-above' : ''}`}>
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

function mapStateToProps ({ currentUser: currentUserId, users, questions }, ownProps) {
  const question = questions[ownProps.questionId];
  const author = users[question.author];
  return { currentUser: users[currentUserId], author, question };
}

export default connect(mapStateToProps)(AnsweredQuestion);
