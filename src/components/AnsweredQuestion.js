import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Avatar from './Avatar';

class AnsweredQuestion extends Component {
  render() {
    const {
      currentUser,
      author,
      question,
      chosenOption,
      otherOption,
      chosenCount,
      otherCount
    } = this.props;
    const chosenOptionText = question[chosenOption].text;
    const otherOptionText = question[otherOption].text;
    const youAsked = author.id === currentUser.id;
    const askedName = youAsked ? 'you' : this.props.author.name;
    const totalCount = chosenCount + otherCount;
    const chosenPercent = Math.round((chosenCount / totalCount) * 100);
    const otherPercent = Math.round((otherCount / totalCount) * 100);

    return (
      <div className="component-wrapper answered-question">
        <h2>
          Asked by {askedName}:
        </h2>
        <div className="component-body">
          <Avatar size="large" user={author} />
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
                to={`/questions/${question.id}`}
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
  const chosenOption = users[currentUserId].answers[question.id];
  const otherOption = ['optionOne', 'optionTwo'].filter(opt => opt !== chosenOption);
  const chosenCount = question[chosenOption].votes.length;
  const otherCount = question[otherOption].votes.length;
  return {
    currentUser: users[currentUserId],
    author,
    question,
    chosenOption,
    otherOption,
    chosenCount,
    otherCount
  };
}

export default connect(mapStateToProps)(AnsweredQuestion);
