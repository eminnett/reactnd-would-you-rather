import React from 'react';

const LoginPage = () => (
  <div className="section-wrapper">
    <section>
      <h1>Welcome to 'Would you Rather?'</h1>
      <div className="section-body-wrapper login-body-wrapper">
        <div className="logo-wrapper">
          <div className="logo"></div>
        </div>
        <div className="selection-wrapper">
          <div>To proceed, login as:</div>
          <select>
            <option value="" disabled selected>Please select your account</option>
            <option value="User 1">User 1</option>
            <option value="User 2">User 2</option>
            <option value="User 3">User 3</option>
          </select>
        </div>
        <button>Submit Login</button>
      </div>
    </section>
  </div>
);

export default LoginPage;
