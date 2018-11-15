import React, { Component } from 'react';

class LoginPage extends Component {
  state = { selectedUser: '' };

  handleChange = (event) => {
    this.setState({selectedUser: event.target.value});
  }

  render() {
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
                onChange={this.handleChange}
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
            >Submit Login</button>
          </div>
        </section>
      </div>
    );
  }
}

export default LoginPage;
