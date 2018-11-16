import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';

class UnansweredQuestion extends Component {
  static propTypes = {
    preview: PropTypes.bool
  };

  state = { selection: '' };

  handleChange = (event) => {
    this.setState({ selection: event.target.value });
  };

  render() {
    return (
      <div className="component-wrapper unanswered-question">
        <h2>
          User 1 Asks:
        </h2>
        <div className="component-body">
          <Avatar size="large" user={{avatarURL: "/avatars/128_1.png"}} />
          { this.props.preview &&
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
          { !this.props.preview &&
            <div className="component-copy">
              <div className="prompt">
                Would you rather...
              </div>
              <div className="question-option">
                <input
                  id="answer-one"
                  type="radio"
                  value="1"
                  name="question"
                  onChange={this.handleChange.bind(this)}
                />
                <label>Answer 1?</label>
              </div>
              <div className="question-option">
                <input
                  id="answer-two"
                  type="radio"
                  value="2"
                  name="question"
                  onChange={this.handleChange.bind(this)}
                />
                <label>Answer 2?</label>
              </div>
              <button
                type="button"
                disabled={!this.state.selection}
              >Submit</button>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default UnansweredQuestion;
