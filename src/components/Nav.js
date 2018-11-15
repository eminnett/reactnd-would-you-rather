import React from 'react';
import Avatar from './Avatar';

const Nav = () => (
  <div>
    <header className="app-header">
      <nav>
        <div className="nav-group left">
          <div className="navigator is-active">
            <a href='/'>Home</a>
          </div>
          <div className="navigator">
            <a href='/add'>New Question</a>
          </div>
          <div className="navigator">
            <a href='/leaderboard'>Leaderboard</a>
          </div>
        </div>
        <div className="nav-group right">
          <div className="dummy-navigator">
            <div className="greeting">
              Hello, User
            </div>
            <Avatar size="small"/>
          </div>
          <div className="navigator">
            <a href='/logout'>logout</a>
          </div>
        </div>
      </nav>
    </header>
  </div>
);

export default Nav;
