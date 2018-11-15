import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// This pattern was copied from https://reacttraining.com/react-router/web/example/auth-workflow
const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.isAuthenticated ? (
        <Component {...props} />
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

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.instanceOf(React.Component),
    PropTypes.func
  ]).isRequired,
  auth: PropTypes.object.isRequired
};


export default PrivateRoute;
