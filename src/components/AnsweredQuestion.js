import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';

const AnsweredQuestion = (props) => (
  <div className="component-wrapper answered-question">
    <h2>
      Asked by User 1:
    </h2>
    <div className="component-body">
      <Avatar size="large" user={{avatarURL: "/avatars/128_1.png"}} />
      { props.preview &&
        <div className="component-copy">
          <div className="prompt">
            You said you would rather...
          </div>
          <div className="teaser">
            Answer 1.
          </div>
          <button>View Question</button>
        </div>
      }
      { !props.preview &&
        <div className="component-copy answers">
          <div className="answer chosen-answer">
            <div className="copy">
              You decided you would rather Answer 1.
            </div>
          </div>
          <div className="comparison-bar">
            <div className="chosen-bar" style={{width: '25%'}}>25% (1/4)</div>
            <div className="alternative-bar" style={{width: '75%'}}>75% (3 of 4 answers)</div>
          </div>
          <div className="answer alternative-answer">
            <div className="copy">
              Rather than choosing to Answer 2.
            </div>
          </div>
        </div>
      }
    </div>
  </div>
);

AnsweredQuestion.propTypes = {
  preview: PropTypes.bool
};

export default AnsweredQuestion;
