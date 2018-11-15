import React, { Component }  from 'react';
import AnsweredQuestion from '../components/AnsweredQuestion';
import UnansweredQuestion from '../components/UnansweredQuestion';

class QuestionPage extends Component {
  state = {
    question: { answered: false }
  }
  render() {
    return (
      <div className="section-wrapper">
        <section className="question">
          { this.state.question.answered &&
            <AnsweredQuestion />
          }
          { !this.state.question.answered &&
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
  }
}

export default QuestionPage;
