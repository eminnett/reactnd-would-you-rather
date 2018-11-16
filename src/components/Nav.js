import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { setCurrentUser } from '../actions/currentUser';
import PropTypes from 'prop-types';
import Avatar from './Avatar';

class Nav extends Component {
  logout = (event) => {
    event.preventDefault();
    this.props.dispatch(setCurrentUser(null));
  };

  render() {
    return (
      <div>
        <header className="app-header">
          <nav>
            <div className="nav-group left">
              <NavLink
                className="navigator"
                activeClassName="is-active"
                exact
                to='/'
              >Home</NavLink>
              <NavLink
                className="navigator"
                activeClassName="is-active"
                exact
                to='/add'
              >New Question</NavLink>
              <NavLink
                className="navigator"
                activeClassName="is-active"
                exact
                to='/leaderboard'
              >Leaderboard</NavLink>
            </div>
            { this.props.isAuthenticated &&
              <div className="nav-group right">
                <div className="dummy-navigator">
                  <div className="greeting">
                    Hello, {this.props.currentUser.name}
                  </div>
                  <Avatar size="small" user={this.props.currentUser} />
                </div>
                <Link
                  className="navigator"
                  to='/login'
                  onClick={this.logout.bind(this)}
                >logout</Link>
              </div>
            }
          </nav>
        </header>
      </div>
    )
  };
}

Nav.propTypes = {
  location: PropTypes.object.isRequired
};

function mapStateToProps ({ currentUser, users }) {
  return {
    isAuthenticated: currentUser,
    currentUser: currentUser ? users[currentUser] : ''
  };
}

export default withRouter(connect(mapStateToProps)(Nav));
