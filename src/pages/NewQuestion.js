import React, { Component } from 'react';

class NewQuestionPage extends Component {
  state = { answerOne: '', answerTwo: '' };

  handleChange = (event) => {
    if (event.target.id === 'answer-one') {
      this.setState({answerOne: event.target.value});
    }
    if (event.target.id === 'answer-two') {
      this.setState({answerTwo: event.target.value});
    }
  }

  render() {
    const buttonsEnabled = this.state.answerOne && this.state.answerTwo;
    return (
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
              <input
                id="answer-one"
                placeholder='Please complete the phrase for the first option.'
                onChange={this.handleChange}
              />
            </div>
            <div className="seperator">
              - OR -
            </div>
            <div className="option-wrapper">
              <div className="elipsis">...</div>
              <input
                id="answer-two"
                placeholder='Please complete the phrase for the second option.'
                onChange={this.handleChange}
              />
            </div>
            <div className="buttons">
              <div className="button-wrapper">
                <button
                  type="button"
                  disabled={!buttonsEnabled}
                >Submit and go home</button>
              </div>
              <div className="button-wrapper">
                <button
                  type="button"
                  disabled={!buttonsEnabled}
                >Submit and create another</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default NewQuestionPage;
