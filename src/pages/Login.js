import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

class LoginPage extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired
  };

  state = { selectedUser: '', submitted: false };

  handleChange = (event) => {
    this.setState({selectedUser: event.target.value});
  };

  handleSubmission = (event) => {
    this.props.login(this.state.selectedUser);
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
                <option value="User 1">User 1</option>
                <option value="User 2">User 2</option>
                <option value="User 3">User 3</option>
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

export default LoginPage;
