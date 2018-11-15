import React from 'react';
import UnansweredQuestion from '../components/UnansweredQuestion';
import AnsweredQuestion from '../components/AnsweredQuestion';

const HomePage = () => (
  <div className="section-wrapper">
    <section>
      <nav className="tabs">
        <div className="navigator is-active">Unanswered Questions</div>
        <div className="navigator">Answered Questions</div>
      </nav>
      <div id="unanswered-question-list" className="question-list">
        <UnansweredQuestion preview={true} />
        <UnansweredQuestion preview={true} />
        <UnansweredQuestion preview={true} />
        {/* TODO: Add helpful message when the list is empty. */}
      </div>
      <div id="answered-question-list" className="question-list">
        <AnsweredQuestion preview={true} />
        <AnsweredQuestion preview={true} />
        <AnsweredQuestion preview={true} />
        {/* TODO: Add helpful message when the list is empty. */}
      </div>
    </section>
  </div>
);

export default HomePage;
