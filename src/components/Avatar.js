import React from 'react';
import PropTypes from 'prop-types';

const Avatar = (props) => (
  <div className={"avatar-wrapper " + props.size}>
    <div className="avatar">
      <img src="/avatars/128_1.png" alt="user avatar"/>
    </div>
  </div>
);

Avatar.propTypes = {
  size: PropTypes.oneOf(['small', 'large']).isRequired
};

export default Avatar;
