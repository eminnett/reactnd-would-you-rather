import React, { Component } from 'react';
import UnansweredQuestion from '../components/UnansweredQuestion';
import AnsweredQuestion from '../components/AnsweredQuestion';

const navigatorClasses = (list, destination) => {
  let additionalClasses = '';
  if (list === destination) {
    additionalClasses += 'is-active';
  }
  return `navigator ${additionalClasses}`;
}


class HomePage extends Component {
  state = {
    list: 'unanswered'
  }

  switchList(listName) {
    return () => {
      if (this.state.list !== listName) {
        this.setState({list: listName});
      }
    }
  }

  render() {
    return (
      <div className="section-wrapper">
        <section>
          <nav className="tabs">
            <div
              className={navigatorClasses(this.state.list, 'unanswered')}
              onClick={this.switchList('unanswered')}
            >Unanswered Questions</div>
            <div
              className={navigatorClasses(this.state.list, 'answered')}
              onClick={this.switchList('answered')}
            >Answered Questions</div>
          </nav>
          { this.state.list === 'unanswered' &&
            <div id="unanswered-question-list" className="question-list">
              <UnansweredQuestion preview={true} />
              <UnansweredQuestion preview={true} />
              <UnansweredQuestion preview={true} />
              {/* TODO: Add helpful message when the list is empty. */}
            </div>
          }
          { this.state.list === 'answered' &&
            <div id="answered-question-list" className="question-list">
              <AnsweredQuestion preview={true} />
              <AnsweredQuestion preview={true} />
              <AnsweredQuestion preview={true} />
              {/* TODO: Add helpful message when the list is empty. */}
            </div>
          }
        </section>
      </div>
    );
  }
}

export default HomePage;
