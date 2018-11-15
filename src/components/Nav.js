import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from './Avatar';

const navigatorClasses = (props, destination) => {
  let additionalClasses = '';
  if (props.location.pathname === destination) {
    additionalClasses += 'is-active';
  }
  return `navigator ${additionalClasses}`;
}

const Nav = (props) => (
  <div>
    <header className="app-header">
      <nav>
        <div className="nav-group left">
          <Link
            className={navigatorClasses(props, '/')}
            to='/'
          >Home</Link>
          <Link
            className={navigatorClasses(props, '/add')}
            to='/add'
          >New Question</Link>
          <Link
            className={navigatorClasses(props, '/leaderboard')}
            to='/leaderboard'
          >Leaderboard</Link>
        </div>
        { props.currentUser &&
          <div className="nav-group right">
            <div className="dummy-navigator">
              <div className="greeting">
                Hello, {props.currentUser}
              </div>
              <Avatar size="small"/>
            </div>
            <Link
              className="navigator"
              to='/login'
              onClick={props.logout}
            >logout</Link>
          </div>
        }
      </nav>
    </header>
  </div>
);

export default Nav;
