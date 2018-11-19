import React from 'react';
import { connect } from 'react-redux';
import AnsweredQuestion from '../components/AnsweredQuestion';
import UnansweredQuestion from '../components/UnansweredQuestion';
import FourOhFourPage from '../pages/FourOhFour';

const QuestionPage = () => {
  if (!this.props.questionExists) {
    return <FourOhFourPage location={this.props.location}/>
  }
  return (
    <div className="section-wrapper">
      <section className="question">
        { this.props.answered &&
          <AnsweredQuestion questionId={this.props.questionId}/>
        }
        { !this.props.answered &&
          <UnansweredQuestion questionId={this.props.questionId}/>
        }
      </section>
    </div>
  );
}

function mapStateToProps ({ currentUser: currentUserId, users, questions }, ownProps) {
  const questionId = ownProps.match.params.id;
  const questionExists = questions.hasOwnProperty(questionId);
  const answered = users[currentUserId].answers.hasOwnProperty(questionId);
  return { questionId, questionExists, answered };
}

export default connect(mapStateToProps)(QuestionPage);
