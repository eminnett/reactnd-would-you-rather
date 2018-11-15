import React from 'react';

const NewQuestionPage = () => (
  <div className="section-wrapper">
    <section className="new-question">
      <h1>
        Create a New Question
      </h1>
      <div className="section-body-wrapper">
        <h2>
          Would they rather...
        </h2>
        <div className="option-wrapper">
          <div className="elipsis">...</div>
          <input placeholder='Please complete the phrase for the first option.'/>
        </div>
        <div className="seperator">
          - OR -
        </div>
        <div className="option-wrapper">
          <div className="elipsis">...</div>
          <input placeholder='Please complete the phrase for the second option.'/>
        </div>
        <div className="buttons">
          <div className="button-wrapper">
            <button>Submit and go home</button>
          </div>
          <div className="button-wrapper">
            <button>Submit and create another</button>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default NewQuestionPage;
