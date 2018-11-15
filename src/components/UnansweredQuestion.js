import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';

const UnansweredQuestion = (props) => (
  <div className="component-wrapper unanswered-question">
    <h2>
      User 1 Asks:
    </h2>
    <div className="component-body">
      <Avatar size="large"/>
      { props.preview &&
        <div className="component-copy">
          <div className="prompt">
            Would you rather...
          </div>
          <div className="teaser">
            Answer 1?
          </div>
          <div className="teaser">
            Or...
          </div>
          <button>View Question</button>
        </div>
      }
      { !props.preview &&
        <div className="component-copy">
          <div className="prompt">
            Would you rather...
          </div>
          <div className="question-option">
            <input id="answer-one" type="radio" value="1" name="question"/>
            <label>Answer 1?</label>
          </div>
          <div className="question-option">
            <input id="answer-two" type="radio" value="2" name="question"/>
            <label>Answer 2?</label>
          </div>
          <button>Submit</button>
        </div>
      }
    </div>
  </div>
);

UnansweredQuestion.propTypes = {
  preview: PropTypes.bool
};

export default UnansweredQuestion;
