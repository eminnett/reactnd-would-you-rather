import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleCreateQuestion } from '../actions/shared';

class NewQuestionPage extends Component {
  state = { optionOne: '', optionTwo: '', goHome: false };

  handleChange = (event) => {
    if (event.target.id === 'option-one') {
      this.setState({optionOne: event.target.value});
    } else if (event.target.id === 'option-two') {
      this.setState({optionTwo: event.target.value});
    }
  }

  handleSubmissionAndGoHome = (event) => {
    event.preventDefault();

    this.submitOptions();
    this.setState({ goHome: true });
  };

  handleSubmissionAndCreateAnother = (event) => {
    event.preventDefault();

    this.submitOptions();
    this.setState({ optionOne: '', optionTwo: '' });
    document.getElementById("option-one").value = '';
    document.getElementById("option-two").value = '';
  };

  submitOptions = () => {
    this.props.dispatch(
      handleCreateQuestion(this.state.optionOne, this.state.optionTwo)
    );
  };

  render() {
    const buttonsEnabled = this.state.optionOne && this.state.optionTwo;

    if (this.state.goHome) {
      return <Redirect to='/' />
    }

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
                id="option-one"
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
                id="option-two"
                placeholder='Please complete the phrase for the second option.'
                onChange={this.handleChange}
              />
            </div>
            <div className="buttons">
              <div className="button-wrapper">
                <button
                  type="button"
                  disabled={!buttonsEnabled}
                  onClick={this.handleSubmissionAndGoHome.bind(this)}
                >Submit and go home</button>
              </div>
              <div className="button-wrapper">
                <button
                  type="button"
                  disabled={!buttonsEnabled}
                  onClick={this.handleSubmissionAndCreateAnother.bind(this)}
                >Submit and create another</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}


export default connect()(NewQuestionPage);
