import React from 'react';
import AnsweredQuestion from '../components/AnsweredQuestion';
import UnansweredQuestion from '../components/UnansweredQuestion';

const QuestionPage = (props) => (
  <div className="section-wrapper">
    <section className="question">
      { props.question.answered &&
        <AnsweredQuestion />
      }
      { !props.question.answered &&
        <UnansweredQuestion />
      }
      <div className="buttons">
        <div className="button-wrapper">
          <button>Previous</button>
        </div>
        <div className="button-wrapper">
          <button>Next</button>
        </div>
      </div>
    </section>
  </div>
);

export default QuestionPage;
