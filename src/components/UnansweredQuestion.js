import React from 'react';
import Avatar from './Avatar';

const UnansweredQuestion = (props) => (
  <div className="component-wrapper unanswered-question">
    <h2>
      User 1 Asks:
    </h2>
    <div className="component-body">
      <Avatar size="large"/>
      <div className="component-copy">
        <div className="prompt">
          Would you rather...
        </div>
        { props.preview &&
          <div>
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
          <div>
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
  </div>
);

export default UnansweredQuestion;
