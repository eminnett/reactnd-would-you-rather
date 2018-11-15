import React from 'react';
import PropTypes from 'prop-types';

const FourOhFourPage = (props) => (
  <div className="section-wrapper">
    <div className="four-oh-four">
      <h1>Uh Oh...</h1>
      <p>
        This isn't the page you were looking for...
      </p>
      <p>
        and I'm afraid <b>{props.location.pathname}</b> couldn't be found.
      </p>
    </div>
  </div>
);

FourOhFourPage.propTypes = {
  location: PropTypes.object.isRequired
};

export default FourOhFourPage;
