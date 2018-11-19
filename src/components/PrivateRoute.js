import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

// This pattern has been modified from https://reacttraining.com/react-router/web/example/auth-workflow
const PrivateRoute = () => {
  let { component, isAuthenticated, ...rest } = this.props;
  const Comp = component;
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Comp {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.instanceOf(React.Component),
    PropTypes.func
  ]).isRequired
};

function mapStateToProps ({ currentUser }) {
  return {
    isAuthenticated: currentUser !== null
  };
}

export default withRouter(connect(mapStateToProps)(PrivateRoute));
