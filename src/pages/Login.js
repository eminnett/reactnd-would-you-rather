import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentUser } from '../actions/currentUser';
import { Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class LoginPage extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  };

  state = { selectedUser: '', submitted: false };

  handleChange = (event) => {
    this.setState({selectedUser: event.target.value});
  };

  handleSubmission = (event) => {
    event.preventDefault();

    this.props.dispatch(setCurrentUser(this.state.selectedUser));

    this.setState({submitted: true});
  };

  render() {
    let { from } = this.props.location.state || { from: { pathname: "/" } };

    if (this.state.submitted) {
      return <Redirect to={from} />
    }

    return (
      <div className="section-wrapper">
        <section>
          <h1>Welcome to 'Would you Rather?'</h1>
          <div className="section-body-wrapper login-body-wrapper">
            <div className="logo-wrapper">
              <div className="logo"></div>
            </div>
            <div className="selection-wrapper">
              <div>To proceed, login as:</div>
              <select
                defaultValue=""
                onChange={this.handleChange.bind(this)}
              >
                <option value="" disabled>Please select your account</option>
                { this.props.users.map((user) => (
                  <option key={user.id} value={user.id}>{user.name}</option>
                ))}
              </select>
            </div>
            <button
              type="button"
              disabled={!this.state.selectedUser}
              onClick={this.handleSubmission.bind(this)}
            >Submit Login</button>
          </div>
        </section>
      </div>
    );
  }
}

function mapStateToProps ({ users }) {
  const sortedKeys = Object.keys(users).sort();
  return {
    users: sortedKeys.map((k) => users[k])
  };
}

export default withRouter(connect(mapStateToProps)(LoginPage));
